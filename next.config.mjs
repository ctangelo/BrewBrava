/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  i18n: {
    locales: ['en', 'ru', 'vn'],
    defaultLocale: 'vn',
    localeDetection: true
  }
};

export default nextConfig;
