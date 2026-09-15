"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { routes } from "@/lib/routes";

export default function PrefetchRoutes() {
  const router = useRouter();

  useEffect(() => {
    routes.forEach((href) => {
      void router.prefetch(href);
    });
  }, [router]);

  return null;
}
