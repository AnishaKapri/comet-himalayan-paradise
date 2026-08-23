"use client";

import { Check, Copy, Trash2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ConfirmDialog } from "../../../../components/ConfirmDialog";
import { ErrorState } from "../../../../components/ErrorState";
import { PageHeader } from "../../../../components/PageHeader";
import { Skeleton } from "../../../../components/Skeleton";
import { assetsApi } from "../../../../lib/api/assets";
import { ApiError } from "../../../../lib/api/client";
import { useAuth } from "../../../../lib/auth-context";
import { Asset } from "../../../../lib/types";

export default function AssetDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { user } = useAuth();
  const canManage = user?.role === "SUPER_ADMIN" || user?.role === "ADMIN";

  const [asset, setAsset] = useState<Asset | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [useCase, setUseCase] = useState("");
  const [altText, setAltText] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    assetsApi
      .get(params.id)
      .then((data) => {
        setAsset(data);
        setUseCase(data.useCase ?? "");
        setAltText(data.altText ?? "");
      })
      .catch((err) => setError(err instanceof ApiError ? err.message : "Failed to load asset."));
  }, [params.id]);

  async function handleCopy() {
    if (!asset) return;
    await navigator.clipboard.writeText(asset.publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  async function handleSave() {
    if (!asset) return;
    setSaving(true);
    try {
      const updated = await assetsApi.update(asset.id, { useCase: useCase || undefined, altText: altText || undefined });
      setAsset(updated);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!asset) return;
    await assetsApi.remove(asset.id);
    router.push("/assets");
  }

  if (error) return <ErrorState message={error} />;

  if (!asset) {
    return (
      <div className="max-w-2xl">
        <PageHeader title="Asset" />
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <Skeleton className="h-80 w-full" />
          <div className="mt-6 grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-1.5">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
          <Skeleton className="mt-4 h-9 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <PageHeader title={asset.originalFilename} />

      <div className="rounded-lg border border-slate-200 bg-white p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset.publicUrl} alt={asset.altText ?? asset.originalFilename} className="max-h-80 w-full rounded-md object-contain" />

        <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <Field label="Filename" value={asset.originalFilename} />
          <Field label="Type" value={asset.mimeType} />
          <Field label="Size" value={`${(asset.size / 1024).toFixed(1)} KB`} />
          <Field label="Uploaded" value={new Date(asset.createdAt).toLocaleString()} />
        </dl>

        <div className="mt-4 flex items-center gap-2">
          <input readOnly value={asset.publicUrl} className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-600" />
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

        {canManage && (
          <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
            <div>
              <label className="block text-sm font-medium text-slate-700">Use Case</label>
              <input
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Alt Text</label>
              <input
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSave}
                disabled={saving}
                className="rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-60"
              >
                {saving ? "Saving…" : "Save changes"}
              </button>
              <button
                onClick={() => setConfirmDelete(true)}
                className="flex items-center gap-1.5 rounded-md border border-red-200 px-4 py-2 text-sm text-red-600 transition hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
                Delete asset
              </button>
            </div>
          </div>
        )}
      </div>

      <ConfirmDialog
        open={confirmDelete}
        title="Delete this image?"
        description={`"${asset.originalFilename}" will be removed from storage.`}
        confirmLabel="Delete"
        onConfirm={handleDelete}
        onCancel={() => setConfirmDelete(false)}
      />
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-0.5 text-slate-700">{value}</dd>
    </div>
  );
}
