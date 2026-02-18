import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://telehealthvan.com";

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/programs", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/fleet", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/impact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/partner", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/support", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    {
      path: "/accessibility",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
