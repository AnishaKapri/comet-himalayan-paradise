export interface AppConfig {
  port: number;
  databaseUrl: string;
  jwt: {
    secret: string;
    expiresIn: string;
  };
  supabase: {
    url: string;
    serviceRoleKey: string;
    storageBucket: string;
  };
  maxImageSizeMb: number;
  corsOrigins: string[];
}

export default (): AppConfig => ({
  port: parseInt(process.env.PORT ?? '3001', 10),
  databaseUrl: process.env.DATABASE_URL ?? '',
  jwt: {
    secret: process.env.JWT_SECRET ?? '',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '1d',
  },
  supabase: {
    url: process.env.SUPABASE_URL ?? '',
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
    storageBucket: process.env.SUPABASE_STORAGE_BUCKET ?? 'assets',
  },
  maxImageSizeMb: parseInt(process.env.MAX_IMAGE_SIZE_MB ?? '10', 10),
  corsOrigins: (process.env.CORS_ORIGIN ?? '').split(',').map((origin) => origin.trim()).filter(Boolean),
});
