"use client";

import { FolderIcon, ImageIcon, Pencil, Plus, Trash2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { ConfirmDialog } from "../../../components/ConfirmDialog";
import { EmptyState } from "../../../components/EmptyState";
import { ErrorState } from "../../../components/ErrorState";
import { PageHeader } from "../../../components/PageHeader";
import { Select } from "../../../components/Select";
import { Skeleton } from "../../../components/Skeleton";
import { ApiError } from "../../../lib/api/client";
import { foldersApi } from "../../../lib/api/folders";
import { useAuth } from "../../../lib/auth-context";
import { flattenFolderTree } from "../../../lib/folder-tree";
import { FolderWithStats } from "../../../lib/types";

export default function FoldersPage() {
  const { user } = useAuth();
  const canManage = user?.role === "SUPER_ADMIN" || user?.role === "ADMIN";

  const [folders, setFolders] = useState<FolderWithStats[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [newName, setNewName] = useState("");
  const [newParentId, setNewParentId] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  const [renaming, setRenaming] = useState<FolderWithStats | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [renameError, setRenameError] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<FolderWithStats | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  function load() {
    foldersApi
      .list()
      .then((data) => {
        setFolders(data);
        setError(null);
      })
      .catch(() => setError("Failed to load folders."))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function handleCreate(event: FormEvent) {
    event.preventDefault();
    setFormError(null);
    setCreating(true);
    try {
      await foldersApi.create(newName, newParentId || undefined);
      setNewName("");
      setNewParentId("");
      load();
    } catch (err) {
      setFormError(err instanceof ApiError ? err.message : "Failed to create folder.");
    } finally {
      setCreating(false);
    }
  }

  async function handleRename() {
    if (!renaming) return;
    setRenameError(null);
    try {
      await foldersApi.rename(renaming.id, renameValue);
      setRenaming(null);
      load();
    } catch (err) {
      setRenameError(err instanceof ApiError ? err.message : "Failed to rename folder.");
    }
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleteError(null);
    try {
      await foldersApi.remove(deleteTarget.id);
      setDeleteTarget(null);
      load();
    } catch (err) {
      setDeleteError(err instanceof ApiError ? err.message : "Failed to delete folder.");
    }
  }

  const folderOptions = flattenFolderTree(folders);
  const parentSelectOptions = [
    { value: "", label: "Top level" },
    ...folderOptions.map(({ folder, depth }) => ({ value: folder.id, label: folder.name, indent: depth })),
  ];

  return (
    <div>
      <PageHeader title="Folders" />

      {error && <ErrorState message={error} />}

      {loading && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Skeleton className="h-28 w-full rounded-none" />
              <div className="space-y-2 p-3">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && folders.length === 0 && (
        <EmptyState title="No folders yet" description="Create your first folder below to start organizing assets." />
      )}

      {!loading && !error && folders.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {folders.map((folder) => (
            <div
              key={folder.id}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-sm"
            >
              <div className="relative h-28 w-full bg-slate-100">
                {folder.latestAsset ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={folder.latestAsset.publicUrl}
                    alt={folder.latestAsset.altText ?? folder.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <FolderIcon className="h-9 w-9 text-slate-300" strokeWidth={1.5} />
                  </div>
                )}
                <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
                  <ImageIcon className="h-3 w-3" />
                  {folder.assetCount}
                </span>
              </div>
              <div className="p-3">
                <p className="truncate text-sm font-medium text-slate-800" title={folder.name}>
                  {folder.name}
                </p>
                <p className="truncate text-xs text-slate-400" title={folder.path}>
                  {folder.path}
                </p>
                {canManage && (
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => {
                        setRenaming(folder);
                        setRenameValue(folder.name);
                        setRenameError(null);
                      }}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-200 px-2 py-1.5 text-xs text-slate-600 transition hover:bg-slate-100"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      Rename
                    </button>
                    <button
                      onClick={() => {
                        setDeleteTarget(folder);
                        setDeleteError(null);
                      }}
                      aria-label="Delete folder"
                      className="rounded-md border border-red-200 p-1.5 text-red-600 transition hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {canManage && (
        <form onSubmit={handleCreate} className="mt-6 max-w-2xl space-y-3 rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-slate-900">Create Folder</h2>
          <div className="flex flex-wrap items-start gap-3">
            <input
              placeholder="Folder name"
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="min-w-[180px] flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[var(--color-brand)] focus:outline-none"
            />
            <Select value={newParentId} onChange={setNewParentId} options={parentSelectOptions} className="w-56" />
            <button
              type="submit"
              disabled={creating}
              className="flex items-center gap-1.5 rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--color-brand-dark)] disabled:opacity-60"
            >
              <Plus className="h-4 w-4" />
              {creating ? "Creating…" : "Create"}
            </button>
          </div>
          {formError && <ErrorState message={formError} />}
        </form>
      )}

      {renaming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-sm font-semibold text-slate-900">Rename folder</h2>
            <input
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
              className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
            />
            {renameError && <ErrorState message={renameError} />}
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setRenaming(null)}
                className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleRename}
                className="rounded-md bg-[var(--color-brand)] px-3 py-1.5 text-sm font-medium text-white hover:bg-[var(--color-brand-dark)]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={deleteTarget !== null}
        title="Delete this folder?"
        description={deleteError ?? "Folders that still contain assets or subfolders cannot be deleted."}
        confirmLabel="Delete"
        onConfirm={handleDelete}
        onCancel={() => {
          setDeleteTarget(null);
          setDeleteError(null);
        }}
      />
    </div>
  );
}
