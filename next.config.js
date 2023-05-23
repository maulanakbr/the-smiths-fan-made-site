/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_MAIN_IMAGE_URL,
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_ARTICLE_IMAGE_URL_1,
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_ARTICLE_IMAGE_URL_2,
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_ARTICLE_IMAGE_URL_3,
      },
    ],
    minimumCacheTTL: 15000000,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
