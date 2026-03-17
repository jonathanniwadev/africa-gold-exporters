// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://africagoldexporters.com";

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.7 },
    { path: "/products", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/transaction-process", priority: 0.9 },
    { path: "/buyer-requirements", priority: 0.9 },
    { path: "/export-procedure", priority: 0.8 },
    { path: "/verification-compliance", priority: 0.8 },
    { path: "/documentation", priority: 0.8 },
    { path: "/purity-standards", priority: 0.8 },
    { path: "/buy-gold-africa", priority: 0.95 },
    { path: "/gold-suppliers-africa", priority: 0.95 },
    { path: "/gold-suppliers-uganda", priority: 0.9 },
    { path: "/gold-suppliers-kenya", priority: 0.9 },
    { path: "/gold-bars-for-sale-africa", priority: 0.95 },
    { path: "/how-to-buy-gold-africa", priority: 0.95 },
    { path: "/is-it-safe-to-buy-gold-from-africa", priority: 0.95 },
    { path: "/how-gold-export-uganda-works", priority: 0.95 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}