import { Role, User } from '@prisma/client';

export class UserResponse {
  id!: string;
  name!: string;
  email!: string;
  role!: Role;
  isActive!: boolean;
  createdAt!: Date;
  updatedAt!: Date;

  static fromEntity(user: User): UserResponse {
    const response = new UserResponse();
    response.id = user.id;
    response.name = user.name;
    response.email = user.email;
    response.role = user.role;
    response.isActive = user.isActive;
    response.createdAt = user.createdAt;
    response.updatedAt = user.updatedAt;
    return response;
  }
}
