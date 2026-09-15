import type { Metadata } from "next";
import { site } from "./data";
import type { SiteRoute } from "./routes";

/** Same index rules for people and Google — never split by user-agent. */
export const indexFollow = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
} satisfies Metadata["robots"];

export function canonicalUrl(path: SiteRoute) {
  return path === "/" ? site.url : `${site.url}${path}`;
}

export function routeMeta(path: SiteRoute, title: string, description: string): Metadata {
  const url = canonicalUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { url },
    robots: indexFollow,
  };
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
