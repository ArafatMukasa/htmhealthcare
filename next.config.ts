import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow remote images used across marketing and product surfaces
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '31.97.49.110',
        port: '8000',
        pathname: '/assets/images/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
