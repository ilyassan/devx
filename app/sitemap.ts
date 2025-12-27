import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.devx.ch'
  const pages = ['', 'services', 'contact']

  const sitemapEntries: MetadataRoute.Sitemap = []

  pages.forEach(page => {
    locales.forEach(locale => {
      // For English (default locale), don't add locale prefix
      // For French, add /fr prefix
      const url = locale === 'en'
        ? `${baseUrl}${page ? `/${page}` : ''}`
        : `${baseUrl}/${locale}${page ? `/${page}` : ''}`

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.9,
        alternates: {
          languages: {
            en: `${baseUrl}${page ? `/${page}` : ''}`,
            fr: `${baseUrl}/fr${page ? `/${page}` : ''}`,
            de: `${baseUrl}/de${page ? `/${page}` : ''}`,
          }
        }
      })
    })
  })

  return sitemapEntries
}
