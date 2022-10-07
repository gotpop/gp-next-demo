/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["via.placeholder.com"],
    loader: "custom"
  },
}

module.exports = nextConfig
