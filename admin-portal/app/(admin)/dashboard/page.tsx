"use client";

import { FolderTree, Images, Users as UsersIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ErrorState } from "../../../components/ErrorState";
import { PageHeader } from "../../../components/PageHeader";
import { Skeleton } from "../../../components/Skeleton";
import { assetsApi } from "../../../lib/api/assets";
import { foldersApi } from "../../../lib/api/folders";
import { usersApi } from "../../../lib/api/users";
import { useAuth } from "../../../lib/auth-context";
import { Asset } from "../../../lib/types";

interface Stats {
  totalAssets: number;
  totalFolders: number;
  totalUsers: number | null;
  recentUploads: Asset[];
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canViewUsers = user?.role === "SUPER_ADMIN" || user?.role === "ADMIN";

    Promise.all([
      assetsApi.list({ page: 1, limit: 6 }),
      foldersApi.list(),
      canViewUsers ? usersApi.list() : Promise.resolve(null),
    ])
      .then(([assets, folders, users]) => {
        setStats({
          totalAssets: assets.total,
          totalFolders: folders.length,
          totalUsers: users ? users.length : null,
          recentUploads: assets.items,
        });
        setError(null);
      })
      .catch(() => setError("Failed to load dashboard data."));
  }, [user]);

  return (
    <div>
      <PageHeader title="Dashboard" />

      {error && <ErrorState message={error} />}

      {!error && !stats && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5">
                <Skeleton className="h-11 w-11 shrink-0 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3.5 w-20" />
                  <Skeleton className="h-6 w-12" />
                </div>
              </div>
            ))}
          </div>
          <Skeleton className="mt-8 mb-3 h-4 w-32" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-lg" />
            ))}
          </div>
        </>
      )}

      {stats && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard label="Total Assets" value={stats.totalAssets} icon={Images} />
            <StatCard label="Total Folders" value={stats.totalFolders} icon={FolderTree} />
            <StatCard label="Total Users" value={stats.totalUsers ?? "—"} icon={UsersIcon} />
          </div>

          <h2 className="mt-8 mb-3 text-sm font-semibold text-slate-900">Recent Uploads</h2>
          {stats.recentUploads.length === 0 ? (
            <p className="text-sm text-slate-500">No assets uploaded yet.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {stats.recentUploads.map((asset) => (
                <Link
                  key={asset.id}
                  href={`/assets/${asset.id}`}
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset.publicUrl}
                    alt={asset.altText ?? asset.originalFilename}
                    className="h-24 w-full object-cover transition group-hover:opacity-90"
                  />
                  <p className="truncate px-2 py-1.5 text-xs text-slate-600">{asset.originalFilename}</p>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: number | string;
  icon: typeof Images;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)]/10">
        <Icon className="h-5 w-5 text-[var(--color-brand)]" strokeWidth={2} />
      </div>
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-0.5 text-2xl font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
