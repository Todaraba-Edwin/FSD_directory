/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (!process.env.NODE_ENV === "development") return [];
    return [
      {
        source: "/api/:path",
        destination: `${process.env.NEXT_PUBLIC_RESOURCE_URL}/api/:path`,
      },
    ];
  },
};

export default nextConfig;
