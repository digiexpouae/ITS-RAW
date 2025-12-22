/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '355294401173-backend-dev-images-alt.s3.me-central-1.amazonaws.com',
      'd1hsc8wltq206s.cloudfront.net'
    ],
  },

};

export default nextConfig;
