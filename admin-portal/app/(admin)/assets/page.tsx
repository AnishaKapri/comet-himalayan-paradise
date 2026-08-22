"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ConfirmDialog } from "../../../components/ConfirmDialog";
import { EmptyState } from "../../../components/EmptyState";
import { ErrorState } from "../../../components/ErrorState";
import { LoadingState } from "../../../components/LoadingState";
import { PageHeader } from "../../../components/PageHeader";
import { assetsApi } from "../../../lib/api/assets";
import { foldersApi } from "../../../lib/api/folders";
import { useAuth } from "../../../lib/auth-context";
import { flattenFolderTree } from "../../../lib/folder-tree";
import { Asset, Folder, PaginatedAssets } from "../../../lib/types";

const PAGE_SIZE = 24;

export default function AssetsPage() {
  const { user } = useAuth();
  const canManage = user?.role === "SUPER_ADMIN" || user?.role === "ADMIN";
  const canUpload = canManage || user?.role === "EDITOR";

  const [folders, setFolders] = useState<Folder[]>([]);
  const [folderId, setFolderId] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<PaginatedAssets | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Asset | null>(null);

  useEffect(() => {
    foldersApi.list().then(setFolders).catch(() => undefined);
  }, []);

  const load = useCallback(() => {
    assetsApi
      .list({ folderId: folderId || undefined, search: search || undefined, page, limit: PAGE_SIZE })
      .then((data) => {
        setResult(data);
        setError(null);
      })
      .catch(() => setError("Failed to load assets."));
  }, [folderId, search, page]);

  useEffect(() => {
    load();
  }, [load]);

  async function handleCopy(asset: Asset) {
    await navigator.clipboard.writeText(asset.publicUrl);
    setCopiedId(asset.id);
    setTimeout(() => setCopiedId((current) => (current === asset.id ? null : current)), 1500);
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    await assetsApi.remove(deleteTarget.id);
    setDeleteTarget(null);
    load();
  }

  const folderOptions = flattenFolderTree(folders);

  return (
    <div>
      <PageHeader
        title="Assets"
        action={
          canUpload ? (
            <Link
              href="/assets/upload"
              className="rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-brand-dark)]"
            >
              Upload Image
            </Link>
          ) : undefined
        }
      />

      <div className="mb-4 flex flex-wrap gap-3">
        <input
          type="search"
          placeholder="Search images…"
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="w-64 rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
        />
        <select
          value={folderId}
          onChange={(e) => {
            setPage(1);
            setFolderId(e.target.value);
          }}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
        >
          <option value="">All folders</option>
          {folderOptions.map(({ folder, depth }) => (
            <option key={folder.id} value={folder.id}>
              {"—".repeat(depth)} {folder.name}
            </option>
          ))}
        </select>
      </div>

      {error && <ErrorState message={error} />}
      {!error && !result && <LoadingState />}

      {result && result.items.length === 0 && (
        <EmptyState title="No images found" description="Try a different search or upload a new image." />
      )}

      {result && result.items.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {result.items.map((asset) => (
              <div key={asset.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <Link href={`/assets/${asset.id}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.publicUrl}
                    alt={asset.altText ?? asset.originalFilename}
                    className="h-32 w-full object-cover"
                  />
                </Link>
                <div className="p-3">
                  <p className="truncate text-sm font-medium text-slate-800" title={asset.originalFilename}>
                    {asset.originalFilename}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{new Date(asset.createdAt).toLocaleDateString()}</p>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => handleCopy(asset)}
                      className="flex-1 rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
                    >
                      {copiedId === asset.id ? "Copied!" : "Copy URL"}
                    </button>
                    {canManage && (
                      <button
                        onClick={() => setDeleteTarget(asset)}
                        className="rounded-md border border-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
            <span>
              Page {result.page} of {result.totalPages} ({result.total} total)
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={result.page <= 1}
                className="rounded-md border border-slate-200 px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => Math.min(result.totalPages, p + 1))}
                disabled={result.page >= result.totalPages}
                className="rounded-md border border-slate-200 px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      <ConfirmDialog
        open={deleteTarget !== null}
        title="Delete this image?"
        description={deleteTarget ? `"${deleteTarget.originalFilename}" will be removed from storage.` : undefined}
        confirmLabel="Delete"
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
