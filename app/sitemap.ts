import type { MetadataRoute } from "next";

import { cases, insights } from "@/lib/content";
import { servicePages } from "@/lib/pages";

const siteUrl = "https://leadingsocial.com";
const lastModified = new Date("2026-05-11");

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/process",
  "/case-studies",
  "/reviews",
  "/insights",
  "/playbooks",
  "/growth-audit",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...servicePages.map((service) => `/services/${service.slug}`),
    ...cases.map((caseStudy) => `/case-studies/${caseStudy.slug}`),
    ...insights.map((post) => `/insights/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length > 2 ? 0.7 : 0.85,
  }));
}
