import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  skipTrailingSlashRedirect: true,
  devIndicators: false,
};

export default nextConfig;
