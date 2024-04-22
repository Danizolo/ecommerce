/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 08/04/2024 - 20:52:20
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 08/04/2024
 * - Author          : DHANUSH
 * - Modification    :
 **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
      },
    };
    return config;
  },
};

module.exports = nextConfig;
