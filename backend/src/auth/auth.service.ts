import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { UserResponse } from '../users/entities/user-response.entity';
import { UsersService } from '../users/users.service';
import { LoginResponse } from './entities/login-response.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateCredentials(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (!user || !user.isActive) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatches = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }

  async login(user: User): Promise<LoginResponse> {
    const accessToken = await this.jwtService.signAsync({ sub: user.id });
    const response = new LoginResponse();
    response.user = UserResponse.fromEntity(user);
    response.accessToken = accessToken;
    return response;
  }
}
