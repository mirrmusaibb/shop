/** @type {import('next').NextConfig} */
const repo = process.env.GITHUB_REPOSITORY?.replace(/^.*\//, "") ?? "";
const isGhPages = Boolean(process.env.GITHUB_ACTIONS);
const isUserSite = repo.toLowerCase().endsWith(".github.io");
const basePath = isGhPages && !isUserSite ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  reactStrictMode: true,
};

module.exports = nextConfig;
