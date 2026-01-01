/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      '355294401173-backend-dev-images-alt.s3.me-central-1.amazonaws.com',
      'd1hsc8wltq206s.cloudfront.net'
    ],
  },

};

export default nextConfig;
