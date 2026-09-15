import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://vaidehi-jainn.github.io/Vaidehi-Jain";

  return [
    { url: siteUrl, lastModified: new Date() },
  ];
}
