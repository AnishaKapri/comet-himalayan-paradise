import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateFolderDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  name!: string;

  @ApiPropertyOptional({ description: 'Parent folder id. Omit to create a top-level folder.' })
  @IsOptional()
  @IsString()
  parentId?: string;
}
