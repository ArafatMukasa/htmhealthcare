import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow images served from the Supabase storage bucket
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '31.97.49.110',
        port: '8000',
      },
    ],
  },
}

export default nextConfig
