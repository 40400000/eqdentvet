import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vhtnlfbnq3ecybmn.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;

