/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clinicboom.co',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
