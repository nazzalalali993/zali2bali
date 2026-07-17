import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages deployment
  // Use static export for Cloudflare Pages compatibility
  output: "export",
  trailingSlash: true,
  
  images: {
    // Cloudflare Images-compatible setup
    formats: ["image/avif", "image/webp"],
    unoptimized: true, // Required for static export
  },

  // Performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
