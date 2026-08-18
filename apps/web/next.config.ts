import path from "path"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARNING: This allows production builds to successfully complete even
    // if there are type errors in your project. We are working on fixing this.
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@web": path.join(__dirname, "src"),
      };
    }
    return config;
  },
};

export default nextConfig;
