import { Folder } from '@prisma/client';

export interface FolderThumbnailAsset {
  id: string;
  publicUrl: string;
  altText: string | null;
  originalFilename: string;
}

export interface FolderWithStats extends Folder {
  assetCount: number;
  latestAsset: FolderThumbnailAsset | null;
}
