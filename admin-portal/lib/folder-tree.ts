import { Folder } from "./types";

export interface FolderOption {
  folder: Folder;
  depth: number;
}

export function flattenFolderTree(folders: Folder[]): FolderOption[] {
  const byParent = new Map<string | null, Folder[]>();
  for (const folder of folders) {
    const key = folder.parentId;
    byParent.set(key, [...(byParent.get(key) ?? []), folder]);
  }

  const result: FolderOption[] = [];

  function walk(parentId: string | null, depth: number) {
    const children = [...(byParent.get(parentId) ?? [])].sort((a, b) => a.name.localeCompare(b.name));
    for (const folder of children) {
      result.push({ folder, depth });
      walk(folder.id, depth + 1);
    }
  }

  walk(null, 0);
  return result;
}
