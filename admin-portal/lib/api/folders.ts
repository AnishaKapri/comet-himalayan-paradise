import { Folder, FolderWithStats } from "../types";
import { apiClient } from "./client";

export const foldersApi = {
  list: () => apiClient.get<FolderWithStats[]>("/folders"),
  create: (name: string, parentId?: string) => apiClient.post<Folder>("/folders", { name, parentId }),
  rename: (id: string, name: string) => apiClient.patch<Folder>(`/folders/${id}`, { name }),
  remove: (id: string) => apiClient.delete<{ message: string }>(`/folders/${id}`),
};
