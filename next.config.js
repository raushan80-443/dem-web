/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Cloudflare Pages compatibility:
  // Uncomment the next line for static export only (no SSR or API routes):
  // output: 'export',
  experimental: {
    optimizeCss: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
