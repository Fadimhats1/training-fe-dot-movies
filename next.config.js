/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'os.alipayobjects.com',
      'static.wikia.nocookie.net',
      'image.tmdb.org',
    ],
  },
};

module.exports = nextConfig;
