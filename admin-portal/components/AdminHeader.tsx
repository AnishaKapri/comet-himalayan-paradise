"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../lib/auth-context";

export function AdminHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.replace("/login");
  }

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
      <span className="text-sm font-semibold text-slate-900">CHP Admin Portal</span>
      {user && (
        <div className="flex items-center gap-3 text-sm">
          <span className="text-slate-600">
            {user.name} <span className="text-slate-400">({user.role})</span>
          </span>
          <button
            onClick={handleLogout}
            className="rounded-md border border-slate-200 px-3 py-1.5 text-slate-600 transition hover:bg-slate-100"
          >
            Log out
          </button>
        </div>
      )}
    </header>
  );
}
