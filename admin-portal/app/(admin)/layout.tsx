"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AdminHeader } from "../../components/AdminHeader";
import { AdminSidebar } from "../../components/AdminSidebar";
import { LoadingState } from "../../components/LoadingState";
import { useAuth } from "../../lib/auth-context";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingState label="Checking your session…" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar user={user} />
      <div className="flex flex-1 flex-col">
        <AdminHeader />
        <main className="flex-1 bg-slate-50 p-6">{children}</main>
      </div>
    </div>
  );
}
