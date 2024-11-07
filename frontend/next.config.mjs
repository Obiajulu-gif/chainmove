/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true, // Disable image optimization for compatibility with static export
  },
};

export default nextConfig;
