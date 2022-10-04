/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["th.bing.com", "www.themoviedb.org"],
  },
};

module.exports = nextConfig;
