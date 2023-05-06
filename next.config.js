/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["unicorn-staging.eu.saleor.cloud"],
  },
};

module.exports = nextConfig;
