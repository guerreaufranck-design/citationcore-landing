import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for better performance
  // Remove this if you need server-side features later
  images: {
    // Use unoptimized images for static export compatibility
    unoptimized: true,
  },
};

export default nextConfig;
