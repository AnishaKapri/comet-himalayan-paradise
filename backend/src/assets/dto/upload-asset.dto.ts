import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UploadAssetDto {
  @ApiProperty({ description: 'Target folder id' })
  @IsString()
  folderId!: string;

  @ApiPropertyOptional({ description: 'Where this image is used, e.g. "hero", "gallery"' })
  @IsOptional()
  @IsString()
  useCase?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  altText?: string;
}
