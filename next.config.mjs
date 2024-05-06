/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "antd", "rc-util", "rc-pagination", "rc-picker", "@ant-design/icons-svg"
  ],
  // i18n: {
  //   locales: ['en-US', 'cs-CZ', 'vi-VN'],
  //   defaultLocale: 'en-US',
  //   // domains: [
  //   //   {
  //   //     domain: 'client-nika-coffee.vercel.app/',
  //   //     locales: 'cs-CZ',
  //   //   }
  //   // ]
  // }
};

export default nextConfig;
