import { Module } from '@nestjs/common';
import { FoldersModule } from '../folders/folders.module';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { StorageService } from './services/storage.service';

@Module({
  imports: [FoldersModule],
  controllers: [AssetsController],
  providers: [AssetsService, StorageService],
})
export class AssetsModule {}
