/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'afill-back.hash-squad.kro.kr',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
