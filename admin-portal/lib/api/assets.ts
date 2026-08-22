import { Asset, PaginatedAssets } from "../types";
import { apiClient } from "./client";

export interface QueryAssetsInput {
  folderId?: string;
  useCase?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface UploadAssetInput {
  file: File;
  folderId: string;
  useCase?: string;
  altText?: string;
}

export interface UpdateAssetInput {
  folderId?: string;
  useCase?: string;
  altText?: string;
}

export const assetsApi = {
  list: (query: QueryAssetsInput = {}) => {
    const params = new URLSearchParams();
    if (query.folderId) params.set("folderId", query.folderId);
    if (query.useCase) params.set("useCase", query.useCase);
    if (query.search) params.set("search", query.search);
    params.set("page", String(query.page ?? 1));
    params.set("limit", String(query.limit ?? 24));
    return apiClient.get<PaginatedAssets>(`/assets?${params.toString()}`);
  },
  get: (id: string) => apiClient.get<Asset>(`/assets/${id}`),
  upload: ({ file, folderId, useCase, altText }: UploadAssetInput) => {
    const formData = new FormData();
    formData.set("file", file);
    formData.set("folderId", folderId);
    if (useCase) formData.set("useCase", useCase);
    if (altText) formData.set("altText", altText);
    return apiClient.upload<Asset>("/assets/upload", formData);
  },
  update: (id: string, input: UpdateAssetInput) => apiClient.patch<Asset>(`/assets/${id}`, input),
  remove: (id: string) => apiClient.delete<{ message: string }>(`/assets/${id}`),
};
