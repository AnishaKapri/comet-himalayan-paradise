import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from './decorators/current-user.decorator';
import { LoginDto } from './dto/login.dto';
import { LoginResponse } from './entities/login-response.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthenticatedUser } from './types/authenticated-user.type';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto): Promise<LoginResponse> {
    const user = await this.authService.validateCredentials(dto.email, dto.password);
    return this.authService.login(user);
  }

  @Get('me')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() user: AuthenticatedUser): AuthenticatedUser {
    return user;
  }

  @Post('logout')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  logout(): { message: string } {
    // Stateless JWT — nothing is invalidated server-side; the client discards its token.
    return { message: 'Logged out' };
  }
}
