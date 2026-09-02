import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";

const siteUrl = "https://nivela.eng.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
    },
    {
      url: `${siteUrl}/sobre`,
    },
    {
      url: `${siteUrl}/servicos`,
    },
    {
      url: `${siteUrl}/avaliacao-tecnica`,
    },
    {
      url: `${siteUrl}/usucapiao`,
    },
    {
      url: `${siteUrl}/blog`,
    },
    {
      url: `${siteUrl}/contato`,
    },
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,

    ...(post.date
      ? {
          lastModified: new Date(`${post.date}T00:00:00-03:00`),
        }
      : {}),
  }));

  return [...staticRoutes, ...posts];
}
