import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="bg-primary text-white pb-24 pt-14">
      <div className="container-page grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/assets/logo_floridablanca.png"
              alt="Logo de Floridablanca Veterinarios — clínica veterinaria en Murcia"
              width={48}
              height={48}
              className="h-12 w-12 object-contain bg-white rounded-full p-1"
            />
            <span className="font-display font-bold text-lg leading-tight">
              Floridablanca
              <span className="block text-white/70 text-sm font-medium">
                Veterinarios
              </span>
            </span>
          </div>
          <p className="text-sm text-white/80 mb-4">{siteConfig.tagline}</p>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-base mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li><Link href="#inicio" className="hover:text-white">Inicio</Link></li>
            <li><Link href="#servicios" className="hover:text-white">Servicios</Link></li>
            <li><Link href="#nosotros" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="#contacto" className="hover:text-white">Contacto</Link></li>
            <li><Link href="/aviso-legal" className="hover:text-white">Aviso legal</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-base mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" aria-hidden />
              <a href={`tel:${siteConfig.phone.tel}`} className="hover:text-white">
                {siteConfig.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" aria-hidden />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white break-all">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
              <span>
                L-V 10:00–13:30 / 17:00–20:00
                <br />
                Sáb-Dom: cerrado
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-base mb-4">Urgencias 24h</h3>
          <p className="text-sm text-white/85 mb-3">
            HUVEMUR — Hospital de Urgencias Veterinarias de la Región de Murcia.
            24 horas, 365 días.
          </p>
          <a
            href={`tel:${siteConfig.emergency.phoneTel}`}
            className="inline-flex items-center gap-2 bg-emergency hover:bg-emergency/90 px-4 py-2 rounded-card text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden />
            {siteConfig.emergency.phoneDisplay}
          </a>
          <p className="text-xs text-white/70 mt-2">
            También: {siteConfig.emergency.secondaryDisplay}
          </p>
        </div>
      </div>

      <div className="container-page border-t border-white/15 mt-10 pt-6 text-xs text-white/70 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <span>
          © {new Date().getFullYear()} {siteConfig.legalName} · Todos los
          derechos reservados.
        </span>
        <Link href="/aviso-legal" className="hover:text-white">
          Aviso legal y política de privacidad
        </Link>
      </div>
    </footer>
  )
}
