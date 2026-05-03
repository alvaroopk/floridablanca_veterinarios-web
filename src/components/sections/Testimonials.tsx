import { Quote, Star } from 'lucide-react'

// TODO: reemplazar con reseñas reales del cliente (Google Business)
const testimonials = [
  {
    text: 'Llevo años trayendo a mis perros y siempre nos atienden con muchísimo cariño. Sabes que tu mascota está en buenas manos.',
    author: 'María G.',
    role: 'clienta desde 2015',
  },
  {
    text: 'Mi gato tuvo una urgencia un domingo por la noche y nos derivaron al hospital 24h. Le salvaron la vida. Profesionalidad y humanidad por igual.',
    author: 'Javier R.',
    role: 'Murcia',
  },
  {
    text: 'La peluquera es una crack, mi schnauzer sale guapísimo siempre. Y en consulta, súper claros explicando todo. 10/10.',
    author: 'Lucía M.',
    role: 'clienta habitual',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="container-page py-20 md:py-28">
      <div className="max-w-3xl">
        <span className="text-accent font-semibold text-sm uppercase tracking-wide">
          Testimonios
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-textPrimary text-balance">
          Lo que dicen las familias que cuidan a sus mascotas con nosotros
        </h2>
        <p className="mt-3 text-textSecondary text-base md:text-lg">
          Tres décadas como clínica veterinaria de barrio en Murcia: mascotas
          felices y familias tranquilas.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="bg-white border border-borderc rounded-card p-6 shadow-soft flex flex-col"
          >
            <div className="flex items-center gap-1 text-yellow-400 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" aria-hidden />
              ))}
            </div>
            <Quote className="w-6 h-6 text-primary/30 mb-2" aria-hidden />
            <blockquote className="text-textSecondary italic leading-relaxed flex-1">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-textPrimary">{t.author}</span>{' '}
              <span className="text-textSecondary">— {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
