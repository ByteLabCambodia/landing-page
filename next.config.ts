import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // 3D model + font sources: replaced by renaming, safe to cache forever
        source: "/Robot_Soccer_ASSY.glb",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Static images in /public — long cache, revalidate in background
        source: "/:path*(\\.jpg|\\.jpeg|\\.png|\\.svg|\\.webp)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
