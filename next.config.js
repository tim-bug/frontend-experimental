/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "randomuser.me"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
