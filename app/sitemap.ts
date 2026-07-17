import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://zali2bali.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/company", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/solutions", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/services", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/technology", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/legal/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/legal/terms", priority: 0.3, changeFreq: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
