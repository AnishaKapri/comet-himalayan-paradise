"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { PageHeader } from "../../../../components/PageHeader";
import { assetsApi } from "../../../../lib/api/assets";
import { foldersApi } from "../../../../lib/api/folders";
import { ApiError } from "../../../../lib/api/client";
import { flattenFolderTree } from "../../../../lib/folder-tree";
import { Asset, Folder } from "../../../../lib/types";

export default function UploadAssetPage() {
  const router = useRouter();
  const [folders, setFolders] = useState<Folder[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [folderId, setFolderId] = useState("");
  const [useCase, setUseCase] = useState("");
  const [altText, setAltText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState<Asset | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    foldersApi.list().then(setFolders).catch(() => undefined);
  }, []);

  function handleFileChange(selected: File | null) {
    setFile(selected);
    setPreviewUrl(selected ? URL.createObjectURL(selected) : null);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!file || !folderId) {
      setError("Please choose a file and a destination folder.");
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      const asset = await assetsApi.upload({ file, folderId, useCase: useCase || undefined, altText: altText || undefined });
      setUploaded(asset);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Upload failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleCopy() {
    if (!uploaded) return;
    await navigator.clipboard.writeText(uploaded.publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const folderOptions = flattenFolderTree(folders);

  if (uploaded) {
    return (
      <div className="max-w-lg">
        <PageHeader title="Upload Image" />
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm font-medium text-green-700">Upload successful</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={uploaded.publicUrl} alt={uploaded.altText ?? uploaded.originalFilename} className="mt-4 max-h-64 rounded-md object-contain" />
          <div className="mt-4 flex items-center gap-2">
            <input readOnly value={uploaded.publicUrl} className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-600" />
            <button onClick={handleCopy} className="rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-600 hover:bg-slate-100">
              {copied ? "Copied!" : "Copy URL"}
            </button>
          </div>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => {
                setUploaded(null);
                handleFileChange(null);
                setUseCase("");
                setAltText("");
              }}
              className="rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-brand-dark)]"
            >
              Upload another
            </button>
            <button
              onClick={() => router.push("/assets")}
              className="rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-100"
            >
              Back to assets
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg">
      <PageHeader title="Upload Image" />
      <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-slate-700">
            Image File
          </label>
          <input
            id="file"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            required
            onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
            className="mt-1 w-full text-sm"
          />
          {previewUrl && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={previewUrl} alt="Preview" className="mt-3 max-h-48 rounded-md border border-slate-200 object-contain" />
          )}
        </div>

        <div>
          <label htmlFor="folder" className="block text-sm font-medium text-slate-700">
            Folder
          </label>
          <select
            id="folder"
            required
            value={folderId}
            onChange={(e) => setFolderId(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
          >
            <option value="" disabled>
              Select a folder
            </option>
            {folderOptions.map(({ folder, depth }) => (
              <option key={folder.id} value={folder.id}>
                {"—".repeat(depth)} {folder.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="useCase" className="block text-sm font-medium text-slate-700">
            Use Case
          </label>
          <input
            id="useCase"
            type="text"
            placeholder="e.g. hero, gallery, thumbnail"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="altText" className="block text-sm font-medium text-slate-700">
            Alt Text
          </label>
          <input
            id="altText"
            type="text"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
          />
        </div>

        {error && (
          <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-brand-dark)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Uploading…" : "Upload"}
        </button>
      </form>
    </div>
  );
}
