import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponse } from './entities/user-response.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  async findAll(): Promise<UserResponse[]> {
    const users = await this.usersService.findAll();
    return users.map((user) => UserResponse.fromEntity(user));
  }

  @Get(':id')
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  async findOne(@Param('id') id: string): Promise<UserResponse> {
    const user = await this.usersService.findByIdOrThrow(id);
    return UserResponse.fromEntity(user);
  }

  @Post()
  @Roles(Role.SUPER_ADMIN)
  async create(@Body() dto: CreateUserDto): Promise<UserResponse> {
    const user = await this.usersService.create(dto);
    return UserResponse.fromEntity(user);
  }

  @Patch(':id')
  @Roles(Role.SUPER_ADMIN)
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<UserResponse> {
    const user = await this.usersService.update(id, dto);
    return UserResponse.fromEntity(user);
  }

  @Delete(':id')
  @Roles(Role.SUPER_ADMIN)
  async deactivate(@Param('id') id: string): Promise<UserResponse> {
    const user = await this.usersService.deactivate(id);
    return UserResponse.fromEntity(user);
  }
}
