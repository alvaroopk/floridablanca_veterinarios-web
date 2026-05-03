import { SITE_URL, siteConfig } from '@/lib/site-config'

/**
 * JSON-LD structured data centralizado para la web.
 *
 * Incluye:
 *  - VeterinaryCare (LocalBusiness): datos de la clínica para SEO local en Murcia.
 *  - WebSite: ayuda a Google a entender el sitio y la query principal.
 *
 * El schema FAQPage va embebido en el componente Faq.tsx para mantener la
 * relación 1:1 entre las preguntas visibles y las marcadas.
 */
export default function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    '@id': `${SITE_URL}/#business`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    image: `${SITE_URL}/assets/fachada_clinica.jpg`,
    logo: `${SITE_URL}/assets/logo_floridablanca.png`,
    url: SITE_URL,
    telephone: siteConfig.phone.intl,
    email: siteConfig.email,
    priceRange: '€€',
    foundingDate: '1993',
    slogan: siteConfig.tagline,
    areaServed: [
      { '@type': 'City', name: 'Murcia' },
      { '@type': 'AdministrativeArea', name: 'Región de Murcia' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressRegion: siteConfig.address.region,
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '13:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '17:00',
        closes: '20:00',
      },
    ],
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios veterinarios',
      itemListElement: [
        'Radiología digital',
        'Laboratorio propio',
        'Quirófano con anestesia inhalatoria',
        'Ecografía y cardiología',
        'Hospitalización de día',
        'UCI con oxígeno y calor',
        'Peluquería canina y felina',
        'Tienda de alimentación y accesorios',
        'Urgencias veterinarias 24h (vía HUVEMUR)',
      ].map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
        },
      })),
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'es-ES',
    publisher: { '@id': `${SITE_URL}/#business` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
