/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    domains: ['i.pravatar.cc', 'placehold.co'],
  },
};

module.exports = nextConfig;
