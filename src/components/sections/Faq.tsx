'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Necesito pedir cita o puedo ir directamente a la clínica?',
    a: 'Recomendamos pedir cita previa para que podamos atenderte sin esperas. Puedes hacerlo desde el formulario de esta web, llamando al 968 343 980 o escribiendo por WhatsApp.',
  },
  {
    q: '¿Dónde voy si mi mascota tiene una urgencia veterinaria 24h en Murcia?',
    a: 'Llama al Hospital de Urgencias Veterinarias de la Región de Murcia (HUVEMUR), nuestro centro asociado: 968 899 280 / 630 832 020. Atienden urgencias veterinarias 24 horas, los 365 días del año, en Murcia.',
  },
  {
    q: '¿Atendéis gatos además de perros?',
    a: 'Sí, atendemos perros y gatos por igual. Nuestro equipo está formado en medicina felina, y la peluquería también ofrece servicio felino.',
  },
  {
    q: '¿Qué incluye la primera consulta?',
    a: 'Una exploración general, revisión del estado de vacunación y desparasitación, y un plan de salud personalizado según la edad, raza y condición de tu mascota.',
  },
  {
    q: '¿Hacéis campañas de prevención (leishmaniosis, limpieza dental, esterilización)?',
    a: 'Sí, organizamos campañas estacionales con condiciones especiales. Llámanos o pregúntanos en consulta para conocer la campaña vigente.',
  },
  {
    q: '¿Dónde estáis ubicados? ¿Hay aparcamiento?',
    a: 'Estamos en Avenida Juan Antonio Perea, 11 — Bajo, en el Barrio del Carmen, frente a la estación de Ferrocarril de Murcia. Hay aparcamiento en zona azul y parking de la estación a pocos metros.',
  },
]

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number>(0)

  return (
    <section id="faq" className="bg-bg-alt py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">
            Preguntas frecuentes
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-textPrimary">
            Preguntas frecuentes sobre nuestra clínica veterinaria en Murcia
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const open = openIdx === i
            return (
              <div
                key={i}
                className="bg-white border border-borderc rounded-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-bg-alt transition-colors"
                >
                  <span className="font-display font-semibold text-textPrimary text-base md:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-textSecondary leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <FaqJsonLd faqs={faqs} />
    </section>
  )
}

function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
