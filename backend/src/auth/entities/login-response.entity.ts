import { UserResponse } from '../../users/entities/user-response.entity';

export class LoginResponse {
  user!: UserResponse;
  accessToken!: string;
}
