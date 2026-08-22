"use client";

import { FormEvent, useEffect, useState } from "react";
import { ConfirmDialog } from "../../../components/ConfirmDialog";
import { ErrorState } from "../../../components/ErrorState";
import { LoadingState } from "../../../components/LoadingState";
import { PageHeader } from "../../../components/PageHeader";
import { ApiError } from "../../../lib/api/client";
import { foldersApi } from "../../../lib/api/folders";
import { useAuth } from "../../../lib/auth-context";
import { flattenFolderTree } from "../../../lib/folder-tree";
import { Folder } from "../../../lib/types";

export default function FoldersPage() {
  const { user } = useAuth();
  const canManage = user?.role === "SUPER_ADMIN" || user?.role === "ADMIN";

  const [folders, setFolders] = useState<Folder[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [newName, setNewName] = useState("");
  const [newParentId, setNewParentId] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  const [renaming, setRenaming] = useState<Folder | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Folder | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  function load() {
    foldersApi
      .list()
      .then(setFolders)
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
    await foldersApi.rename(renaming.id, renameValue);
    setRenaming(null);
    load();
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

  return (
    <div className="max-w-2xl">
      <PageHeader title="Folders" />

      {error && <ErrorState message={error} />}
      {loading && <LoadingState />}

      {!loading && !error && (
        <div className="rounded-lg border border-slate-200 bg-white">
          {folderOptions.length === 0 ? (
            <p className="p-6 text-sm text-slate-500">No folders yet.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {folderOptions.map(({ folder, depth }) => (
                <li key={folder.id} className="flex items-center justify-between px-4 py-3 text-sm">
                  <span style={{ paddingLeft: depth * 16 }} className="text-slate-700">
                    {folder.name}
                    <span className="ml-2 text-xs text-slate-400">{folder.path}</span>
                  </span>
                  {canManage && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setRenaming(folder);
                          setRenameValue(folder.name);
                        }}
                        className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
                      >
                        Rename
                      </button>
                      <button
                        onClick={() => setDeleteTarget(folder)}
                        className="rounded-md border border-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {canManage && (
        <form onSubmit={handleCreate} className="mt-6 space-y-3 rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-slate-900">Create Folder</h2>
          <div className="flex flex-wrap gap-3">
            <input
              placeholder="Folder name"
              required
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
            />
            <select
              value={newParentId}
              onChange={(e) => setNewParentId(e.target.value)}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
            >
              <option value="">Top level</option>
              {folderOptions.map(({ folder, depth }) => (
                <option key={folder.id} value={folder.id}>
                  {"—".repeat(depth)} {folder.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              disabled={creating}
              className="rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-60"
            >
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
