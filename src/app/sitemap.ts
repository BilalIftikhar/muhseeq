import type { MetadataRoute } from "next";
import { absoluteUrl, mainNav } from "@/config/site";
import { products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", ...mainNav.map((n) => n.href)];
  return [
    ...pages.map((p) => ({ url: absoluteUrl(p), changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7 })),
    ...products.map((p) => ({ url: absoluteUrl(`/products/${p.slug}`), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
