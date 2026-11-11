import { MetadataRoute } from "next"
import { getAllSlugs } from "@/lib/enfermedades"
import { getAllSlugs as getAllBlogSlugs } from "@/lib/blog"

const BASE = "https://reumamonterrey.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/dr-hernan-vazquez-gonzalez`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/consultorios/christus-muguerza-sur`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/consultorios/care-medical-hub`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/consultorios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/enfermedades`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  const conditionPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${BASE}/enfermedades/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const blogSlugs = getAllBlogSlugs()
  const blogPages: MetadataRoute.Sitemap = blogSlugs.length > 0
    ? [
        {
          url: `${BASE}/blog`,
          lastModified: now,
          changeFrequency: "weekly" as const,
          priority: 0.7,
        },
        ...blogSlugs.map((slug) => ({
          url: `${BASE}/blog/${slug}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        })),
      ]
    : []

  return [...staticPages, ...conditionPages, ...blogPages]
}
