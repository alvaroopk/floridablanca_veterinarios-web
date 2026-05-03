import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { SITE_INDEXED } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Aviso legal y política de privacidad',
  description: `Aviso legal, política de privacidad y política de cookies de ${siteConfig.legalName} (Murcia).`,
  alternates: {
    canonical: '/aviso-legal',
  },
  robots: {
    // Página legal: la indexamos cuando el sitio esté abierto a buscadores,
    // pero no necesita seguir enlaces internos como prioridad.
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
  },
}

export default function AvisoLegalPage() {
  return (
    <article className="container-page max-w-3xl py-16 md:py-24 text-textSecondary leading-relaxed">
      <h1 className="font-display font-bold text-3xl md:text-4xl text-textPrimary mb-2">
        Aviso legal y política de privacidad
      </h1>
      <p className="text-sm text-textSecondary mb-10">
        Última actualización: {new Date().getFullYear()}
      </p>

      <h2 className="font-display font-semibold text-xl text-textPrimary mt-8 mb-3">
        1. Titularidad del sitio web
      </h2>
      <p>
        Este sitio web es titularidad de <strong>{siteConfig.legalName}</strong>,
        con domicilio en {siteConfig.address.street},{' '}
        {siteConfig.address.postalCode} {siteConfig.address.city} (
        {siteConfig.address.region}, {siteConfig.address.country}). Puedes
        contactar con nosotros en el teléfono{' '}
        <a className="text-primary underline" href={`tel:${siteConfig.phone.tel}`}>
          {siteConfig.phone.display}
        </a>{' '}
        o por email a{' '}
        <a className="text-primary underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </p>

      <h2 className="font-display font-semibold text-xl text-textPrimary mt-8 mb-3">
        2. Objeto
      </h2>
      <p>
        El presente aviso legal regula el uso del sitio web propiedad de{' '}
        {siteConfig.legalName}. La utilización del sitio web atribuye la
        condición de usuario e implica la aceptación plena de todas las
        cláusulas y condiciones de uso incluidas en este aviso legal.
      </p>

      <h2 className="font-display font-semibold text-xl text-textPrimary mt-8 mb-3">
        3. Política de privacidad y protección de datos
      </h2>
      <p>
        En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica
        3/2018 de Protección de Datos Personales y Garantía de los Derechos
        Digitales (LOPDGDD), te informamos de que los datos personales que nos
        facilites a través del formulario de contacto serán tratados por{' '}
        {siteConfig.legalName} con la finalidad de gestionar tu solicitud de
        cita o consulta, así como mantener la relación profesional con nuestros
        clientes.
      </p>
      <p className="mt-3">
        La base legal del tratamiento es el consentimiento del interesado y/o
        la ejecución de un contrato de prestación de servicios. Los datos no
        se cederán a terceros salvo obligación legal.
      </p>
      <p className="mt-3">
        Puedes ejercer tus derechos de acceso, rectificación, supresión,
        oposición, limitación del tratamiento y portabilidad enviando un email
        a{' '}
        <a className="text-primary underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>{' '}
        indicando el derecho que deseas ejercer. También puedes presentar una
        reclamación ante la Agencia Española de Protección de Datos
        (www.aepd.es) si consideras que tus derechos no han sido atendidos
        adecuadamente.
      </p>

      <h2 className="font-display font-semibold text-xl text-textPrimary mt-8 mb-3">
        4. Política de cookies
      </h2>
      <p>
        Este sitio web utiliza únicamente cookies técnicas estrictamente
        necesarias para el funcionamiento del sitio. No utilizamos cookies de
        terceros con fines publicitarios o de seguimiento sin tu
        consentimiento previo.
      </p>

      <h2 className="font-display font-semibold text-xl text-textPrimary mt-8 mb-3">
        5. Propiedad intelectual e industrial
      </h2>
      <p>
        Todos los contenidos del sitio web (textos, fotografías, gráficos,
        imágenes, iconos, logos, diseño y código fuente) son propiedad de{' '}
        {siteConfig.legalName} o de sus respectivos autores. Cualquier uso no
        autorizado podrá ser perseguido legalmente.
      </p>

      <h2 className="font-display font-semibold text-xl text-textPrimary mt-8 mb-3">
        6. Legislación aplicable y jurisdicción
      </h2>
      <p>
        El presente aviso legal se rige por la legislación española. Las
        partes se someten, a su elección, para la resolución de los
        conflictos y con renuncia a cualquier otro fuero, a los juzgados y
        tribunales del domicilio del usuario.
      </p>
    </article>
  )
}
