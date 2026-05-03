import { Award, Microscope, Clock, Heart } from 'lucide-react'

const pillars = [
  {
    icon: Award,
    title: 'Experiencia desde 1993',
    text: 'Más de 30 años atendiendo a las mascotas del Barrio del Carmen, en Murcia. Conocemos a nuestros clientes por su nombre.',
  },
  {
    icon: Microscope,
    title: 'Tecnología veterinaria moderna',
    text: 'Radiología digital, ecografía, laboratorio propio y UCI con oxígeno: diagnóstico preciso y tratamientos efectivos sin salir de tu barrio.',
  },
  {
    icon: Clock,
    title: 'Urgencias veterinarias 24h en Murcia',
    text: 'Respaldo del Hospital de Urgencias Veterinarias de la Región de Murcia (HUVEMUR), abierto 24 horas, los 365 días del año.',
  },
  {
    icon: Heart,
    title: 'Atención cercana y personalizada',
    text: 'Trato familiar, sin prisas. Cada mascota es única, y cada plan de salud lo diseñamos a su medida.',
  },
]

export default function WhyUs() {
  return (
    <section id="diferenciales" className="bg-bg-alt py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="text-accent font-semibold text-sm uppercase tracking-wide">
            Por qué elegirnos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-textPrimary text-balance">
            ¿Por qué elegirnos como tu veterinario en Murcia?
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white border border-borderc rounded-card p-6 hover:shadow-softHover transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" aria-hidden />
              </div>
              <h3 className="font-display font-bold text-lg text-textPrimary">
                {title}
              </h3>
              <p className="mt-2 text-sm text-textSecondary leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
