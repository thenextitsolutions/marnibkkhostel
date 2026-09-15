export const routes = [
  "/",
  "/rooms",
  "/book",
  "/amenities",
  "/features",
  "/about",
  "/contact",
  "/faq",
] as const;

export type SiteRoute = (typeof routes)[number];
