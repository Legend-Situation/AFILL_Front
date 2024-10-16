// next.config.mjs
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // 필요하다면 캐시 문제 해결을 위한 설정을 추가합니다.
    config.cache = false;
    return config;
  },
};

export default withVanillaExtract(nextConfig);
