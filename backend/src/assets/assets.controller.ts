import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Asset, Role } from '@prisma/client';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { AuthenticatedUser } from '../auth/types/authenticated-user.type';
import { AssetsService } from './assets.service';
import { QueryAssetsDto } from './dto/query-assets.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { UploadAssetDto } from './dto/upload-asset.dto';
import { PaginatedAssets } from './entities/paginated-assets.entity';

@ApiTags('assets')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post('upload')
  @Roles(Role.SUPER_ADMIN, Role.ADMIN, Role.EDITOR)
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
        folderId: { type: 'string' },
        useCase: { type: 'string' },
        altText: { type: 'string' },
      },
      required: ['file', 'folderId'],
    },
  })
  upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: UploadAssetDto,
    @CurrentUser() user: AuthenticatedUser,
  ): Promise<Asset> {
    return this.assetsService.upload(file, dto, user.id);
  }

  @Get()
  findAll(@Query() query: QueryAssetsDto): Promise<PaginatedAssets> {
    return this.assetsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Asset> {
    return this.assetsService.findByIdOrThrow(id);
  }

  @Patch(':id')
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateAssetDto): Promise<Asset> {
    return this.assetsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.SUPER_ADMIN, Role.ADMIN)
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.assetsService.delete(id);
    return { message: 'Asset deleted' };
  }
}
