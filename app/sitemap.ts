import { MetadataRoute } from "next";
import { AUTHORS_DIRECTORY } from "@/lib/data/authors";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tratadodecoluna.com.br";
  const locales = ["pt", "en", "es"];
  const staticRoutes = [
    "",
    "/home-new",
    "/indice-new",
    "/indice",
    "/prefacio-new",
    "/prefacio",
    "/apresentacao-new",
    "/apresentacao",
    "/autores-new",
    "/autores",
    "/referencias-new",
    "/referencias",
    "/debate-new",
    "/debate",
    "/busca-new",
    "/busca",
    "/politica-de-privacidade-new",
    "/politica-de-privacidade",
    "/termos-de-uso-new",
    "/termos-de-uso",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static routes for each locale
  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" || route === "/home-new" ? 1.0 : route.includes("debate") ? 0.9 : 0.8,
      });
    }

    // 109 Chapters (New & Classic routes)
    for (let i = 1; i <= 109; i++) {
      entries.push({
        url: `${baseUrl}/${locale}/capitulo-new/${i}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.88,
      });
      entries.push({
        url: `${baseUrl}/${locale}/capitulo/${i}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    // Author Profiles (E-E-A-T Authority)
    for (const author of AUTHORS_DIRECTORY) {
      const slugOrId = author.slug || author.id;
      entries.push({
        url: `${baseUrl}/${locale}/autor-new/${slugOrId}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      });
      entries.push({
        url: `${baseUrl}/${locale}/autor/${slugOrId}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}


