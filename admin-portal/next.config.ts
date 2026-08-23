import type { NextConfig } from "next";
import path from "node:path";

const supabaseHostname = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_HOSTNAME;

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: supabaseHostname
      ? [
          {
            protocol: "https",
            hostname: supabaseHostname,
          },
        ]
      : [],
  },
};

export default nextConfig;
