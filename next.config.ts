import type { NextConfig } from "next";

const repoName = "Vaidehi-Jain";
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  ...(isGitHubPagesBuild
    ? {
        // Generate static HTML files inside the "out" folder for GitHub Pages.
        output: "export" as const,
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

export default nextConfig;
