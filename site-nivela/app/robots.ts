import type { MetadataRoute } from "next";

const siteUrl = "https://nivela.eng.br";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/callback", "/diagnostico", "/teste_auth"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
