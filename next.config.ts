import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  headers: async () => [
    {
      source: "/admin/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        },
      ],
    },
    {
      source: "/embed/:path*",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "frame-ancestors *;",
        },
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      ],
    },
    {
      source: "/:locale/embed/:path*",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "frame-ancestors *;",
        },
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      ],
    },
    {
      source: "/:locale/debate",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "frame-ancestors *;",
        },
      ],
    },
    {
      source: "/:locale/debate-new",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "frame-ancestors *;",
        },
      ],
    },
  ],
};

export default nextConfig;
