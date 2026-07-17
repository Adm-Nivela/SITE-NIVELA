import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/posts";

const siteUrl = "https://nivela.eng.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sobre",
    "/servicos",
    "/avaliacao-tecnica",
    "/blog",
    "/contato",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/avaliacao-tecnica" ? 0.9 : 0.75,
  })) satisfies MetadataRoute.Sitemap;

  const posts = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticRoutes, ...posts];
}
