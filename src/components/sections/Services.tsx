import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    image: '/assets/radiografia_digital.jpg',
    title: 'Radiología digital',
    alt: 'Equipo de radiología digital veterinaria en Floridablanca Veterinarios (Murcia)',
    text: 'Radiografía veterinaria digital con menos radiación y resultados al instante: detectamos fracturas y problemas torácicos o abdominales en la misma consulta.',
  },
  {
    image: '/assets/laboratorio.jpg',
    title: 'Laboratorio propio',
    alt: 'Laboratorio veterinario propio en la clínica Floridablanca, Murcia',
    text: 'Análisis de sangre y orina hechos en clínica, con resultados rápidos para diagnosticar y empezar el tratamiento sin esperas.',
  },
  {
    image: '/assets/quirofano.jpg',
    title: 'Cirugía y quirófano equipado',
    alt: 'Quirófano veterinario equipado para cirugía con anestesia inhalatoria, Murcia',
    text: 'Cirugía veterinaria con anestesia inhalatoria —la más segura— y monitorización continua: esterilizaciones, tumores y tejidos blandos.',
  },
  {
    image: '/assets/ecografia.jpg',
    title: 'Ecografía y cardiología',
    alt: 'Ecógrafo veterinario de última generación para ecografía y cardiología en Murcia',
    text: 'Ecografía veterinaria y cardiología completas: ecocardiografía Doppler, electrocardiografía, Holter 24h y presión arterial oscilométrica.',
  },
  {
    image: '/assets/hospitalizacion_dia.jpg',
    title: 'Hospitalización de día',
    alt: 'Zona de hospitalización de día para mascotas en la clínica veterinaria Floridablanca, Murcia',
    text: 'Hospitalización de día para que tu mascota se recupere bajo control veterinario tras una intervención o un tratamiento intensivo.',
  },
  {
    image: '/assets/uci.jpg',
    title: 'UCI con oxígeno y calor',
    alt: 'UCI veterinaria propia con incubadora de oxígeno y temperatura controlada en Murcia',
    text: 'Unidad de Cuidados Intensivos propia para casos críticos: incubadora con oxígeno y temperatura controlada para una recuperación segura.',
  },
]

const otherSpecialties = [
  'Endoscopia',
  'Oftalmología',
  'Traumatología',
  'Rehabilitación',
  'Campaña leishmaniosis',
  'Limpieza dental',
  'Esterilización',
]

export default function Services() {
  return (
    <section id="servicios" className="bg-bg-alt py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">
            Servicios médicos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-textPrimary text-balance">
            Servicios veterinarios completos en Murcia, con tecnología moderna
          </h2>
          <p className="mt-4 text-textSecondary text-base md:text-lg">
            Diagnóstico, cirugía y hospitalización en un mismo centro. Todo lo
            que tu mascota necesita, en el corazón del Barrio del Carmen de
            Murcia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-white border border-borderc rounded-card overflow-hidden shadow-soft hover:shadow-softHover transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-white border border-borderc rounded-card p-6 md:p-8">
          <h3 className="font-display font-semibold text-base text-textPrimary mb-4">
            Otras especialidades
          </h3>
          <div className="flex flex-wrap gap-2">
            {otherSpecialties.map((tag) => (
              <span
                key={tag}
                className="bg-bg-alt border border-borderc text-textSecondary text-sm px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#contacto"
            className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-7 py-3 rounded-card transition-colors"
          >
            Pedir cita para tu mascota
          </Link>
        </div>
      </div>
    </section>
  )
}
