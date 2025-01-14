import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com",
      },
      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",
      },
      {
        protocol: "https",
        hostname: "26.media.tumblr.com",
      },
    ],
  },
};

export default nextConfig;
