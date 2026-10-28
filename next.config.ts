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
        {
          key: "Permissions-Policy",
          value: "fullscreen=*, autoplay=*, picture-in-picture=*",
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
        {
          key: "Permissions-Policy",
          value: "fullscreen=*, autoplay=*, picture-in-picture=*",
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
        {
          key: "Permissions-Policy",
          value: "fullscreen=*, autoplay=*, picture-in-picture=*",
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
        {
          key: "Permissions-Policy",
          value: "fullscreen=*, autoplay=*, picture-in-picture=*",
        },
      ],
    },
  ],
};

export default nextConfig;
