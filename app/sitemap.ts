import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

const routes = [
  "/",
  "/contact",
  "/deleteAccount",
  "/privacyPolicy",
  "/termsConditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "yearly",
    priority: route === "/" ? 1 : 0.4,
  }));
}
