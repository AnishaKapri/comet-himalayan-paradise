"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ErrorState } from "../../../components/ErrorState";
import { LoadingState } from "../../../components/LoadingState";
import { PageHeader } from "../../../components/PageHeader";
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
      })
      .catch(() => setError("Failed to load dashboard data."));
  }, [user]);

  return (
    <div>
      <PageHeader title="Dashboard" />

      {error && <ErrorState message={error} />}
      {!error && !stats && <LoadingState />}

      {stats && (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard label="Total Assets" value={stats.totalAssets} />
            <StatCard label="Total Folders" value={stats.totalFolders} />
            <StatCard label="Total Users" value={stats.totalUsers ?? "—"} />
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
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-white"
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

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  );
}
