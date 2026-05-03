import type { MetadataRoute } from 'next'
import { SITE_INDEXED } from '@/lib/constants'
import { SITE_URL } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  // Mientras la web no esté en su dominio definitivo, bloqueamos toda
  // indexación para evitar que Google indexe la URL provisional de Vercel.
  if (!SITE_INDEXED) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
