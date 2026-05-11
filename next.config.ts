import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
    qualities: [75],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
