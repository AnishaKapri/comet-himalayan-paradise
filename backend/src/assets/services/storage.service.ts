import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class StorageService {
  private readonly client: ReturnType<typeof createClient>;
  private readonly bucket: string;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('supabase.url');
    const serviceRoleKey = this.configService.get<string>('supabase.serviceRoleKey');
    this.bucket = this.configService.get<string>('supabase.storageBucket') ?? 'assets';

    if (!url || !serviceRoleKey) {
      throw new InternalServerErrorException(
        'Supabase storage is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.',
      );
    }

    this.client = createClient(url, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  async uploadFile(storagePath: string, buffer: Buffer, contentType: string): Promise<string> {
    const { error } = await this.client.storage.from(this.bucket).upload(storagePath, buffer, {
      contentType,
      upsert: false,
    });

    if (error) {
      throw new InternalServerErrorException(`Failed to upload file to storage: ${error.message}`);
    }

    return this.getPublicUrl(storagePath);
  }

  getPublicUrl(storagePath: string): string {
    const { data } = this.client.storage.from(this.bucket).getPublicUrl(storagePath);
    return data.publicUrl;
  }

  async deleteFile(storagePath: string): Promise<void> {
    const { error } = await this.client.storage.from(this.bucket).remove([storagePath]);
    if (error) {
      throw new InternalServerErrorException(`Failed to delete file from storage: ${error.message}`);
    }
  }
}
