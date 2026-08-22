"use client";

import { Check, CheckCircle2, Copy, UploadCloud } from "lucide-react";
import { useRouter } from "next/navigation";
import { DragEvent, FormEvent, useEffect, useRef, useState } from "react";
import { PageHeader } from "../../../../components/PageHeader";
import { Select } from "../../../../components/Select";
import { assetsApi } from "../../../../lib/api/assets";
import { foldersApi } from "../../../../lib/api/folders";
import { ApiError } from "../../../../lib/api/client";
import { cn } from "../../../../lib/utils";
import { flattenFolderTree } from "../../../../lib/folder-tree";
import { Asset, Folder } from "../../../../lib/types";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export default function UploadAssetPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
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
    if (selected && !ACCEPTED_TYPES.includes(selected.type)) {
      setError("Unsupported file type. Please choose a JPEG, PNG, WEBP, or GIF image.");
      return;
    }
    setError(null);
    setFile(selected);
    setPreviewUrl(selected ? URL.createObjectURL(selected) : null);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragActive(false);
    const dropped = event.dataTransfer.files?.[0] ?? null;
    if (dropped) handleFileChange(dropped);
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
  const folderSelectOptions = folderOptions.map(({ folder, depth }) => ({
    value: folder.id,
    label: folder.name,
    indent: depth,
  }));

  if (uploaded) {
    return (
      <div className="max-w-lg">
        <PageHeader title="Upload Image" />
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="flex items-center gap-1.5 text-sm font-medium text-green-700">
            <CheckCircle2 className="h-4 w-4" />
            Upload successful
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={uploaded.publicUrl} alt={uploaded.altText ?? uploaded.originalFilename} className="mt-4 max-h-64 rounded-md object-contain" />
          <div className="mt-4 flex items-center gap-2">
            <input readOnly value={uploaded.publicUrl} className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-600" />
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-600 transition hover:bg-slate-100"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-600" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy URL
                </>
              )}
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
            ref={fileInputRef}
            id="file"
            type="file"
            accept={ACCEPTED_TYPES.join(",")}
            required
            onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
            className="sr-only"
          />

          <div
            role="button"
            tabIndex={0}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            className={cn(
              "mt-1 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-6 py-10 text-center transition",
              dragActive
                ? "border-[var(--color-brand)] bg-green-50"
                : "border-slate-300 hover:border-slate-400 hover:bg-slate-50",
              file && "py-4",
            )}
          >
            {previewUrl ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previewUrl} alt="Preview" className="max-h-48 rounded-md border border-slate-200 object-contain" />
                <p className="mt-1 text-sm font-medium text-slate-700">{file?.name}</p>
                <p className="text-xs text-slate-500">Click or drop a different image to replace it</p>
              </>
            ) : (
              <>
                <UploadCloud
                  className={cn("h-10 w-10", dragActive ? "text-[var(--color-brand)]" : "text-slate-400")}
                  strokeWidth={1.5}
                />
                <p className="text-sm font-medium text-slate-700">
                  <span className="text-[var(--color-brand)]">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-slate-500">JPEG, PNG, WEBP, or GIF</p>
              </>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Folder</label>
          <Select
            value={folderId}
            onChange={setFolderId}
            options={folderSelectOptions}
            placeholder={folders.length === 0 ? "Loading folders…" : "Select a folder"}
            disabled={folders.length === 0}
            className="mt-1"
          />
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
