import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*.php", "/wp-admin", "/wp-login.php", "/.env", "/.git"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
