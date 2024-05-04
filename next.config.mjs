/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "antd", "rc-util", "rc-pagination", "rc-picker", "@ant-design/icons-svg"
  ],
};

export default nextConfig;
