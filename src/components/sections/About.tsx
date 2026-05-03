import Image from 'next/image'
import Link from 'next/link'
import { Award, Clock, Scissors, HeartHandshake } from 'lucide-react'

const stats = [
  { icon: Award, value: '+30 años', label: 'de experiencia' },
  { icon: Clock, value: '24h', label: 'de urgencias asociadas (HUVEMUR)' },
  { icon: Scissors, value: '+20 años', label: 'de experiencia en peluquería' },
  { icon: HeartHandshake, value: '100%', label: 'atención personalizada' },
]

export default function About() {
  return (
    <section id="nosotros" className="container-page py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">
            Sobre la clínica
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-textPrimary text-balance">
            Tres décadas como clínica veterinaria de barrio en Murcia
          </h2>
          <div className="mt-5 space-y-4 text-textSecondary text-base md:text-lg leading-relaxed">
            <p>
              La Clínica Veterinaria Floridablanca abrió sus puertas en 1993,
              en pleno Barrio del Carmen, frente a la estación de Ferrocarril
              de Murcia. Desde entonces hemos cuidado a varias generaciones de
              mascotas con la misma vocación con la que empezamos: tratarlas
              como una más de la familia.
            </p>
            <p>
              Con los años hemos incorporado tecnología veterinaria de
              diagnóstico moderna —radiología digital, ecografía, laboratorio
              propio y UCI con oxígeno— para ofrecerte la mejor atención sin
              que tengas que salir de tu barrio. Y cuando una urgencia no
              espera, contamos con el respaldo del Hospital de Urgencias
              Veterinarias de la Región de Murcia (HUVEMUR), abierto las 24
              horas.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={value}
                className="bg-bg-alt border border-borderc rounded-card p-4 text-center"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" aria-hidden />
                <div className="font-display font-bold text-xl text-primary leading-none">
                  {value}
                </div>
                <div className="text-xs text-textSecondary mt-1.5">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="#servicios"
            className="inline-block mt-8 bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-card transition-colors"
          >
            Conoce nuestros servicios
          </Link>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-soft">
            <Image
              src="/assets/fachada_clinica.jpg"
              alt="Entrada de Floridablanca Veterinarios — clínica veterinaria en el Barrio del Carmen de Murcia, frente a la estación"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
