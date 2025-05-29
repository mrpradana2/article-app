/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "s3.sellerpintar.com",
    },
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
    },
  ],
};

export default nextConfig;
