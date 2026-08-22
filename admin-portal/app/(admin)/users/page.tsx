"use client";

import { FormEvent, useEffect, useState } from "react";
import { DataTable } from "../../../components/DataTable";
import { EmptyState } from "../../../components/EmptyState";
import { ErrorState } from "../../../components/ErrorState";
import { LoadingState } from "../../../components/LoadingState";
import { PageHeader } from "../../../components/PageHeader";
import { ApiError } from "../../../lib/api/client";
import { usersApi } from "../../../lib/api/users";
import { useAuth } from "../../../lib/auth-context";
import { Role, User } from "../../../lib/types";

const ROLES: Role[] = ["SUPER_ADMIN", "ADMIN", "EDITOR", "VIEWER"];

export default function UsersPage() {
  const { user: currentUser } = useAuth();

  if (currentUser?.role !== "SUPER_ADMIN") {
    return (
      <div>
        <PageHeader title="Users" />
        <EmptyState title="Access restricted" description="Only Super Admins can manage users." />
      </div>
    );
  }

  return <UsersManager />;
}

function UsersManager() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("VIEWER");
  const [formError, setFormError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  function load() {
    usersApi
      .list()
      .then(setUsers)
      .catch(() => setError("Failed to load users."))
      .finally(() => setLoading(false));
  }

  useEffect(load, []);

  async function handleCreate(event: FormEvent) {
    event.preventDefault();
    setFormError(null);
    setCreating(true);
    try {
      await usersApi.create({ name, email, password, role });
      setName("");
      setEmail("");
      setPassword("");
      setRole("VIEWER");
      load();
    } catch (err) {
      setFormError(err instanceof ApiError ? err.message : "Failed to create user.");
    } finally {
      setCreating(false);
    }
  }

  async function handleRoleChange(user: User, newRole: Role) {
    await usersApi.update(user.id, { role: newRole });
    load();
  }

  async function handleToggleActive(user: User) {
    if (user.isActive) {
      await usersApi.deactivate(user.id);
    } else {
      await usersApi.update(user.id, { isActive: true });
    }
    load();
  }

  return (
    <div>
      <PageHeader title="Users" />

      {error && <ErrorState message={error} />}
      {loading && <LoadingState />}

      {!loading && !error && (
        <DataTable
          rows={users}
          rowKey={(u) => u.id}
          columns={[
            { header: "Name", cell: (u) => u.name },
            { header: "Email", cell: (u) => u.email },
            {
              header: "Role",
              cell: (u) => (
                <select
                  value={u.role}
                  onChange={(e) => handleRoleChange(u, e.target.value as Role)}
                  className="rounded-md border border-slate-300 px-2 py-1 text-xs"
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              ),
            },
            {
              header: "Status",
              cell: (u) => (
                <span className={u.isActive ? "text-green-700" : "text-slate-400"}>
                  {u.isActive ? "Active" : "Deactivated"}
                </span>
              ),
            },
            {
              header: "",
              cell: (u) => (
                <button
                  onClick={() => handleToggleActive(u)}
                  className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
                >
                  {u.isActive ? "Deactivate" : "Activate"}
                </button>
              ),
            },
          ]}
        />
      )}

      <form onSubmit={handleCreate} className="mt-6 space-y-3 rounded-lg border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-semibold text-slate-900">Create User</h2>
        <div className="flex flex-wrap gap-3">
          <input
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password (min. 8 characters)"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none"
          >
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={creating}
            className="rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-60"
          >
            {creating ? "Creating…" : "Create"}
          </button>
        </div>
        {formError && <ErrorState message={formError} />}
      </form>
    </div>
  );
}
