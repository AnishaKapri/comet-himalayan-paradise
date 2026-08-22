import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Asset, Prisma } from '@prisma/client';
import { randomUUID } from 'crypto';
import { PrismaService } from '../database/prisma.service';
import { FoldersService } from '../folders/folders.service';
import { QueryAssetsDto } from './dto/query-assets.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { UploadAssetDto } from './dto/upload-asset.dto';
import { PaginatedAssets } from './entities/paginated-assets.entity';
import { StorageService } from './services/storage.service';

export const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

interface UploadedFile {
  buffer: Buffer;
  mimetype: string;
  size: number;
  originalname: string;
}

@Injectable()
export class AssetsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
    private readonly foldersService: FoldersService,
    private readonly configService: ConfigService,
  ) {}

  async upload(file: UploadedFile, dto: UploadAssetDto, userId: string): Promise<Asset> {
    if (!file) {
      throw new BadRequestException('An image file is required');
    }

    if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      throw new BadRequestException(
        `Unsupported file type "${file.mimetype}". Allowed types: ${ALLOWED_MIME_TYPES.join(', ')}`,
      );
    }

    const maxSizeBytes = (this.configService.get<number>('maxImageSizeMb') ?? 10) * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      throw new BadRequestException(`File exceeds the maximum allowed size of ${maxSizeBytes / (1024 * 1024)}MB`);
    }

    const folder = await this.foldersService.findByIdOrThrow(dto.folderId);

    const sanitizedName = this.sanitizeFilename(file.originalname);
    const filename = `${randomUUID()}-${sanitizedName}`;
    const storagePath = `${folder.path}/${filename}`;

    const publicUrl = await this.storageService.uploadFile(storagePath, file.buffer, file.mimetype);

    try {
      return await this.prisma.asset.create({
        data: {
          filename,
          originalFilename: file.originalname,
          storagePath,
          publicUrl,
          mimeType: file.mimetype,
          size: file.size,
          folderId: folder.id,
          useCase: dto.useCase,
          altText: dto.altText,
          createdById: userId,
        },
      });
    } catch (error) {
      await this.storageService.deleteFile(storagePath).catch(() => undefined);
      throw error;
    }
  }

  async findAll(query: QueryAssetsDto): Promise<PaginatedAssets> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 24;

    const where: Prisma.AssetWhereInput = {
      isActive: true,
      ...(query.folderId ? { folderId: query.folderId } : {}),
      ...(query.useCase ? { useCase: query.useCase } : {}),
      ...(query.search
        ? {
            OR: [
              { originalFilename: { contains: query.search, mode: 'insensitive' } },
              { filename: { contains: query.search, mode: 'insensitive' } },
              { altText: { contains: query.search, mode: 'insensitive' } },
            ],
          }
        : {}),
    };

    const [items, total] = await Promise.all([
      this.prisma.asset.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.asset.count({ where }),
    ]);

    return { items, total, page, limit, totalPages: Math.ceil(total / limit) || 1 };
  }

  async findByIdOrThrow(id: string): Promise<Asset> {
    const asset = await this.prisma.asset.findFirst({ where: { id, isActive: true } });
    if (!asset) {
      throw new NotFoundException('Asset not found');
    }
    return asset;
  }

  async update(id: string, dto: UpdateAssetDto): Promise<Asset> {
    await this.findByIdOrThrow(id);

    if (dto.folderId) {
      await this.foldersService.findByIdOrThrow(dto.folderId);
    }

    return this.prisma.asset.update({
      where: { id },
      data: {
        ...(dto.folderId ? { folderId: dto.folderId } : {}),
        ...(dto.useCase !== undefined ? { useCase: dto.useCase } : {}),
        ...(dto.altText !== undefined ? { altText: dto.altText } : {}),
      },
    });
  }

  async delete(id: string): Promise<void> {
    const asset = await this.findByIdOrThrow(id);

    // Delete from storage first — if this throws, the asset is left untouched so we
    // never end up with a DB record pointing at a file that may still exist, or a
    // "deleted" record while the underlying storage operation actually failed.
    await this.storageService.deleteFile(asset.storagePath);

    await this.prisma.asset.update({ where: { id }, data: { isActive: false } });
  }

  private sanitizeFilename(filename: string): string {
    const lastDot = filename.lastIndexOf('.');
    const name = lastDot > 0 ? filename.slice(0, lastDot) : filename;
    const ext = lastDot > 0 ? filename.slice(lastDot) : '';
    const sanitized = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return `${sanitized || 'file'}${ext.toLowerCase()}`;
  }
}
