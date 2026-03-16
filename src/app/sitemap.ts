// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://africagoldexporters.com";

  const routes = [
    "",
    "/about",
    "/products",
    "/contact",
    "/transaction-process",
    "/buyer-requirements",
    "/export-procedure",
    "/verification-compliance",
    "/documentation",
    "/purity-standards",
    "/buy-gold-africa",
    "/gold-suppliers-africa",
    "/gold-suppliers-uganda",
    "/gold-suppliers-kenya",
    "/gold-bars-for-sale-africa",
    "/how-to-buy-gold-africa",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}