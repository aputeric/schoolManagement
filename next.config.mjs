/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  experimental: {
    forceDynamic: true, // 🚀 force all routes to be rendered dynamically
  },
  typescript: {
    ignoreBuildErrors: true, // optional
  },
  eslint: {
    ignoreDuringBuilds: true, // optional
  },
};

export default nextConfig;
