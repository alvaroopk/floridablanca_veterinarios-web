import Image from 'next/image'
import Link from 'next/link'
import { Phone, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] md:min-h-[90vh] flex items-center"
    >
      <Image
        src="/assets/fachada_clinica.jpg"
        alt="Fachada de Floridablanca Veterinarios, clínica veterinaria en el Barrio del Carmen de Murcia"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/55"
        aria-hidden
      />
      <div className="container-page relative z-10 text-white py-20 md:py-28 animate-fadeUp">
        <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5">
          <ShieldCheck className="w-4 h-4" aria-hidden />
          Desde 1993 · Urgencias veterinarias 24h con HUVEMUR
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl text-balance">
          Veterinario en Murcia, en el Barrio del Carmen, con urgencias 24h
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/90">
          Más de 30 años cuidando a las mascotas del Barrio del Carmen con
          medicina general, cirugía, ecografía y UCI propia. Y cuando hace
          falta más, urgencias veterinarias 24h en Murcia con HUVEMUR.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="#contacto"
            aria-label="Pedir cita en Floridablanca Veterinarios (Murcia)"
            className="inline-flex items-center justify-center bg-white text-primary font-semibold px-6 py-3 rounded-card hover:bg-white/90 transition-colors"
          >
            Pedir cita online
          </Link>
          <a
            href={`tel:${siteConfig.phone.tel}`}
            aria-label={`Llamar a Floridablanca Veterinarios al ${siteConfig.phone.display}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/80 text-white font-semibold px-6 py-3 rounded-card hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden />
            Llamar ahora · {siteConfig.phone.display}
          </a>
        </div>
      </div>
    </section>
  )
}
