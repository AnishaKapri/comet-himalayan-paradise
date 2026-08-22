"use client";

import { LogOut } from "lucide-react";
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
    <header className="flex h-14 shrink-0 items-center justify-end border-b border-slate-200 bg-white px-6">
      {user && (
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)]/10 text-sm font-semibold text-[var(--color-brand)]">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="text-sm leading-tight">
            <p className="font-medium text-slate-800">{user.name}</p>
            <p className="text-xs text-slate-400">{user.role}</p>
          </div>
          <button
            onClick={handleLogout}
            className="ml-2 flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:bg-slate-100"
          >
            <LogOut className="h-3.5 w-3.5" />
            Log out
          </button>
        </div>
      )}
    </header>
  );
}
