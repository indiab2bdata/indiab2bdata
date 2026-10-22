import type { NextConfig } from "next";
import { permanentRedirects } from "./src/config/redirects";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects: async () => permanentRedirects,
};

export default nextConfig;
