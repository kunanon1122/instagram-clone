import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "cdn2.thecatapi.com",
      "cdn2.thedogapi.com",
      "26.media.tumblr.com",
    ],
  },
};

export default nextConfig;
