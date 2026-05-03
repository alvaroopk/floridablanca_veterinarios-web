import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import DemoBanner from '@/components/DemoBanner'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_INDEXED } from '@/lib/constants'
import { SITE_URL, siteConfig } from '@/lib/site-config'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const TITLE =
  'Veterinario en Murcia · Floridablanca Veterinarios · Urgencias 24h'
const TITLE_OG =
  'Floridablanca Veterinarios · Clínica veterinaria en Murcia (Barrio del Carmen) con urgencias 24h'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Floridablanca Veterinarios · Murcia',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  keywords: [
    'veterinario Murcia',
    'clínica veterinaria Murcia',
    'veterinario Barrio del Carmen Murcia',
    'urgencias veterinarias 24h Murcia',
    'urgencias veterinario Murcia',
    'ecografía mascotas Murcia',
    'radiología veterinaria Murcia',
    'peluquería canina Murcia',
    'cirugía veterinaria Murcia',
    'cardiología veterinaria Murcia',
  ],
  category: 'Veterinary services',
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
    googleBot: {
      index: SITE_INDEXED,
      follow: SITE_INDEXED,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: TITLE_OG,
    description: siteConfig.description,
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: siteConfig.name,
    images: [
      {
        url: '/assets/fachada_clinica.jpg',
        width: 1200,
        height: 630,
        alt: 'Fachada de Floridablanca Veterinarios — clínica veterinaria en el Barrio del Carmen, Murcia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: siteConfig.description,
    images: ['/assets/fachada_clinica.jpg'],
  },
  icons: {
    icon: '/assets/logo_floridablanca.png',
    apple: '/assets/logo_floridablanca.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-ES">
      <body
        className={`${inter.variable} ${jakarta.variable} font-body bg-bg text-textPrimary`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <DemoBanner />
        <JsonLd />
      </body>
    </html>
  )
}
