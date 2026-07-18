import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://zali2bali.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/company", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/solutions", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/solutions/ai-automation", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/solutions/automation", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/solutions/web-development", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/solutions/gohighlevel", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/products", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/industries", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/technology", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/architecture", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/roadmap", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/services", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/case-studies", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/careers", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/legal/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/legal/terms", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/legal/cookies", priority: 0.3, changeFreq: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
