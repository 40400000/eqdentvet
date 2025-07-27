import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vhtnlfbnq3ecybmn.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "fei-fan-production.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;

