// Dominio canónico de producción (sin barra final, para usar con metadataBase y URLs absolutas).
// Cuando se publique el dominio definitivo se actualizará aquí.
export const SITE_URL = 'https://floridablancaveterinarios.com'

export const siteConfig = {
  name: 'Floridablanca Veterinarios',
  legalName: 'Clínica Veterinaria Floridablanca',
  tagline: 'Clínica veterinaria de confianza en Murcia desde 1993',
  description:
    'Veterinario en Murcia (Barrio del Carmen) con más de 30 años de experiencia: consulta, cirugía, ecografía, UCI propia y urgencias veterinarias 24h. Pide cita.',
  shortDescription:
    'Clínica veterinaria en Murcia · Barrio del Carmen · Urgencias 24h.',
  url: `${SITE_URL}/`,
  canonical: SITE_URL,
  founded: 1993,
  phone: {
    display: '968 343 980',
    tel: '968343980',
    intl: '+34968343980',
    whatsapp: 'https://wa.me/34968343980',
  },
  emergency: {
    name: 'HUVEMUR · Hospital de Urgencias Veterinarias de la Región de Murcia',
    phoneDisplay: '968 899 280',
    phoneTel: '968899280',
    secondaryDisplay: '630 832 020',
    secondaryTel: '630832020',
    url: 'https://www.veterinariourgente.com',
  },
  email: 'floridablancaveterinarios@gmail.com',
  address: {
    street: 'Avenida Juan Antonio Perea, 11 — Bajo',
    city: 'Murcia',
    postalCode: '30002',
    region: 'Región de Murcia',
    country: 'España',
    note: 'Barrio del Carmen, frente a la estación de Ferrocarril',
    full: 'Avenida Juan Antonio Perea, 11, Bajo, 30002 Murcia',
    geo: {
      latitude: 37.9838,
      longitude: -1.1277,
    },
    mapsEmbed:
      'https://www.google.com/maps?q=Avenida+Juan+Antonio+Perea+11,+30002+Murcia&output=embed',
    mapsLink:
      'https://www.google.com/maps/dir/?api=1&destination=Avenida+Juan+Antonio+Perea+11,+30002+Murcia',
  },
  hours: {
    weekdays: 'Lunes a viernes: 10:00 – 13:30 y 17:00 – 20:00',
    weekend: 'Sábados, domingos y festivos: cerrado',
    emergency: 'Urgencias 24h · 365 días — HUVEMUR',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61568462093510',
    instagram: 'https://www.instagram.com/floridablanca_veterinarios',
  },
} as const

export type SiteConfig = typeof siteConfig
