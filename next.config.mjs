// next.config.mjs
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // 캐시 설정 최적화
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [import.meta.url]
      },
      name: `${isServer ? 'server' : 'client'}-development`,
      version: '1.0'
    };

    // vanilla-extract 컴파일 최적화
    config.infrastructureLogging = {
      level: 'error'
    };

    // 개발 모드에서의 성능 최적화
    if (process.env.NODE_ENV === 'development') {
      config.watchOptions = {
        ignored: ['**/node_modules', '**/.next']
      };
    }

    return config;
  },
  // 추가 성능 최적화 옵션
  swcMinify: true,
  reactStrictMode: true,

  // 이미지 설정 추가
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'afill-back.hash-squad.kro.kr'
      }
    ]
  }
};

export default withVanillaExtract(nextConfig);