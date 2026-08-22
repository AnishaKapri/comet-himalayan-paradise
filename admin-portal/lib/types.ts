export type Role = "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "VIEWER";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Folder {
  id: string;
  name: string;
  slug: string;
  path: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
}

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

export interface Asset {
  id: string;
  filename: string;
  originalFilename: string;
  storagePath: string;
  publicUrl: string;
  mimeType: string;
  size: number;
  folderId: string;
  useCase: string | null;
  altText: string | null;
  createdById: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface PaginatedAssets {
  items: Asset[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
}
