import { LoginResponse, User } from "../types";
import { apiClient } from "./client";

export const authApi = {
  login: (email: string, password: string) => apiClient.post<LoginResponse>("/auth/login", { email, password }),
  me: () => apiClient.get<User>("/auth/me"),
  logout: () => apiClient.post<{ message: string }>("/auth/logout"),
};
