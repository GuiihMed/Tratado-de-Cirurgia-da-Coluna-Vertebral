import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tratadodecoluna.com.br";
  const locales = ["pt", "en", "es"];
  const staticRoutes = [
    "",
    "/indice",
    "/prefacio",
    "/apresentacao",
    "/autores",
    "/referencias",
    "/debate",
    "/politica-de-privacidade",
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
        priority: route === "" ? 1.0 : route === "/debate" ? 0.9 : 0.8,
      });
    }

    // 109 Chapters
    for (let i = 1; i <= 109; i++) {
      entries.push({
        url: `${baseUrl}/${locale}/capitulo/${i}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }
  }

  return entries;
}
