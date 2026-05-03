import { Phone, Siren } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function EmergencyBanner() {
  return (
    <section id="urgencias" className="container-page -mt-10 md:-mt-14 relative z-20">
      <div className="bg-gradient-to-r from-emergency to-[#B83838] text-white rounded-card shadow-softHover p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="flex items-center gap-4">
          <div className="bg-white/15 p-3 rounded-full animate-pulseSoft">
            <Siren className="w-7 h-7" aria-hidden />
          </div>
          <div>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight">
              Urgencias veterinarias 24h en Murcia — 365 días al año
            </h2>
          </div>
        </div>
        <p className="text-sm md:text-base text-white/90 flex-1">
          Si tu mascota necesita atención fuera de nuestro horario, llama
          directamente a HUVEMUR — Hospital de Urgencias Veterinarias de la
          Región de Murcia, nuestro centro asociado de referencia.
        </p>
        <div className="flex flex-col gap-2 shrink-0">
          <a
            href={`tel:${siteConfig.emergency.phoneTel}`}
            aria-label={`Llamar a urgencias veterinarias 24h en Murcia: ${siteConfig.emergency.phoneDisplay}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-emergency font-bold px-5 py-3 rounded-card hover:bg-white/90 transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden />
            Llamar a Urgencias 24h · {siteConfig.emergency.phoneDisplay}
          </a>
          <a
            href={`tel:${siteConfig.emergency.secondaryTel}`}
            aria-label={`Teléfono alternativo de urgencias veterinarias 24h: ${siteConfig.emergency.secondaryDisplay}`}
            className="text-xs md:text-sm text-white/85 underline-offset-2 hover:underline text-center"
          >
            También: {siteConfig.emergency.secondaryDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
