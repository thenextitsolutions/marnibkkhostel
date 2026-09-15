/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marnibkkhostel.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 20,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
