import { Role, User } from "../types";
import { apiClient } from "./client";

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface UpdateUserInput {
  name?: string;
  role?: Role;
  isActive?: boolean;
}

export const usersApi = {
  list: () => apiClient.get<User[]>("/users"),
  get: (id: string) => apiClient.get<User>(`/users/${id}`),
  create: (input: CreateUserInput) => apiClient.post<User>("/users", input),
  update: (id: string, input: UpdateUserInput) => apiClient.patch<User>(`/users/${id}`, input),
  deactivate: (id: string) => apiClient.delete<User>(`/users/${id}`),
};
