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

  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
