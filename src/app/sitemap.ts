import { MetadataRoute } from 'next'
import { serviceSeo } from '@/lib/serviceSeo' // Adjust path to where your serviceSeo is stored

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://flarewaytechnologies.com'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(serviceSeo).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...serviceRoutes]
}