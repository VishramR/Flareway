import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://flarewaytechnologies.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',        // Block backend API routes from search indexes
          '/_next/',      // Block Next.js internal build files
          '/admin/',      // Block admin panels if you have any
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}