"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { authApi } from "./api/auth";
import { ApiError, clearToken, getToken, setToken } from "./api/client";
import { User } from "./types";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.resolve()
      .then(() => (getToken() ? authApi.me() : null))
      .then(setUser)
      .catch((error: unknown) => {
        if (error instanceof ApiError && error.statusCode === 401) {
          clearToken();
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const response = await authApi.login(email, password);
    setToken(response.accessToken);
    setUser(response.user);
  }, []);

  const logout = useCallback(async () => {
    await authApi.logout().catch(() => undefined);
    clearToken();
    setUser(null);
  }, []);

  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
