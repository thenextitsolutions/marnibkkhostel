import type { MetadataRoute } from "next";
import { site } from "@/lib/data";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
