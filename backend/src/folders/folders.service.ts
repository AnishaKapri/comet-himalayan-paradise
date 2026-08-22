import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Folder, Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { FolderWithStats } from './entities/folder-with-stats.entity';
import { slugify } from './folders.utils';

@Injectable()
export class FoldersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<FolderWithStats[]> {
    const [folders, assets] = await Promise.all([
      this.prisma.folder.findMany({ orderBy: { path: 'asc' } }),
      this.prisma.asset.findMany({
        where: { isActive: true },
        orderBy: { createdAt: 'desc' },
        select: { id: true, folderId: true, publicUrl: true, altText: true, originalFilename: true },
      }),
    ]);

    const statsByFolder = new Map<string, { count: number; latest: (typeof assets)[number] }>();
    for (const asset of assets) {
      const existing = statsByFolder.get(asset.folderId);
      if (existing) {
        existing.count += 1;
      } else {
        statsByFolder.set(asset.folderId, { count: 1, latest: asset });
      }
    }

    return folders.map((folder) => {
      const stats = statsByFolder.get(folder.id);
      return {
        ...folder,
        assetCount: stats?.count ?? 0,
        latestAsset: stats
          ? {
              id: stats.latest.id,
              publicUrl: stats.latest.publicUrl,
              altText: stats.latest.altText,
              originalFilename: stats.latest.originalFilename,
            }
          : null,
      };
    });
  }

  async findByIdOrThrow(id: string): Promise<Folder> {
    const folder = await this.prisma.folder.findUnique({ where: { id } });
    if (!folder) {
      throw new NotFoundException('Folder not found');
    }
    return folder;
  }

  async create(dto: CreateFolderDto): Promise<Folder> {
    const slug = slugify(dto.name);
    if (!slug) {
      throw new BadRequestException('Folder name must contain at least one alphanumeric character');
    }

    let parent: Folder | null = null;
    if (dto.parentId) {
      parent = await this.findByIdOrThrow(dto.parentId);
    }

    const path = parent ? `${parent.path}/${slug}` : slug;

    await this.assertSlugAvailable(dto.parentId ?? null, slug);

    try {
      return await this.prisma.folder.create({
        data: {
          name: dto.name,
          slug,
          path,
          parentId: dto.parentId ?? null,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('A folder with this name already exists in the target location');
      }
      throw error;
    }
  }

  async rename(id: string, dto: UpdateFolderDto): Promise<Folder> {
    const folder = await this.findByIdOrThrow(id);
    const newSlug = slugify(dto.name);
    if (!newSlug) {
      throw new BadRequestException('Folder name must contain at least one alphanumeric character');
    }

    if (newSlug === folder.slug) {
      return this.prisma.folder.update({ where: { id }, data: { name: dto.name } });
    }

    await this.assertSlugAvailable(folder.parentId, newSlug, id);

    const oldPath = folder.path;
    const newPath = folder.parentId
      ? `${oldPath.slice(0, oldPath.length - folder.slug.length - 1)}/${newSlug}`
      : newSlug;

    return this.prisma.$transaction(async (tx) => {
      const descendants = await tx.folder.findMany({
        where: { path: { startsWith: `${oldPath}/` } },
      });

      await tx.folder.update({
        where: { id },
        data: { name: dto.name, slug: newSlug, path: newPath },
      });

      for (const descendant of descendants) {
        const rebasedPath = newPath + descendant.path.slice(oldPath.length);
        await tx.folder.update({ where: { id: descendant.id }, data: { path: rebasedPath } });
      }

      return tx.folder.findUniqueOrThrow({ where: { id } });
    });
  }

  async delete(id: string): Promise<void> {
    await this.findByIdOrThrow(id);

    const [childCount, assetCount] = await Promise.all([
      this.prisma.folder.count({ where: { parentId: id } }),
      this.prisma.asset.count({ where: { folderId: id, isActive: true } }),
    ]);

    if (childCount > 0 || assetCount > 0) {
      throw new ConflictException(
        'Folder is not empty. Move or delete its contents before deleting this folder.',
      );
    }

    await this.prisma.folder.delete({ where: { id } });
  }

  private async assertSlugAvailable(parentId: string | null, slug: string, excludeId?: string): Promise<void> {
    const existing = await this.prisma.folder.findFirst({
      where: { parentId, slug, ...(excludeId ? { id: { not: excludeId } } : {}) },
    });
    if (existing) {
      throw new ConflictException('A folder with this name already exists in the target location');
    }
  }
}
