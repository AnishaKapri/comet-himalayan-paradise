"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Role, User } from "../lib/types";

interface NavItem {
  href: string;
  label: string;
  roles?: readonly Role[];
}

const NAV_ITEMS: readonly NavItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/assets", label: "Assets" },
  { href: "/folders", label: "Folders" },
  { href: "/users", label: "Users", roles: ["SUPER_ADMIN"] },
];

export function AdminSidebar({ user }: { user: User }) {
  const pathname = usePathname();

  return (
    <nav className="flex w-56 shrink-0 flex-col gap-1 border-r border-slate-200 bg-white p-4">
      {NAV_ITEMS.filter((item) => !item.roles || item.roles.includes(user.role)).map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition",
                active ? "bg-[var(--color-brand)] text-white" : "text-slate-600 hover:bg-slate-100",
              )}
            >
              {item.label}
            </Link>
          );
      })}
    </nav>
  );
}
