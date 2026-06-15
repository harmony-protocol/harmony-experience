import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "standalone",
  // Let .mdx files act as pages, routes, and imports.
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
    ],
  },
};

const withMDX = createMDX({
  options: {
    // String form so the plugins work under Turbopack (functions can't cross
    // into Rust). remark-gfm: tables, strikethrough, task lists. rehype-slug:
    // stable heading ids for anchor links and on-page SEO.
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
