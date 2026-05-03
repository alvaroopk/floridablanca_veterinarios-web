import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ExternalLink,
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/site-config'

export default function Contact() {
  return (
    <section id="contacto" className="container-page py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-accent font-semibold text-sm uppercase tracking-wide">
          Pedir cita
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-textPrimary text-balance">
          Pide cita con tu veterinario en Murcia
        </h2>
        <p className="mt-3 text-textSecondary text-base md:text-lg">
          Rellena el formulario y te confirmamos la cita en horario laborable.
          También puedes llamarnos al {siteConfig.phone.display} o
          escribirnos por WhatsApp.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Formulario */}
        <div className="bg-bg-alt rounded-card p-6 md:p-8 border border-borderc">
          <h3 className="font-display font-bold text-xl text-textPrimary mb-5">
            Solicita tu cita
          </h3>
          <ContactForm />
        </div>

        {/* Datos + mapa */}
        <div className="space-y-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary p-2.5 rounded-full shrink-0">
                <MapPin className="w-5 h-5" aria-hidden />
              </span>
              <div>
                <div className="font-semibold text-textPrimary">Dirección</div>
                <p className="text-sm text-textSecondary">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city} (
                  {siteConfig.address.note})
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary p-2.5 rounded-full shrink-0">
                <Phone className="w-5 h-5" aria-hidden />
              </span>
              <div>
                <div className="font-semibold text-textPrimary">Teléfono</div>
                <a
                  href={`tel:${siteConfig.phone.tel}`}
                  className="text-sm text-primary hover:underline"
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary p-2.5 rounded-full shrink-0">
                <MessageCircle className="w-5 h-5" aria-hidden />
              </span>
              <div>
                <div className="font-semibold text-textPrimary">WhatsApp</div>
                <a
                  href={siteConfig.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary p-2.5 rounded-full shrink-0">
                <Mail className="w-5 h-5" aria-hidden />
              </span>
              <div>
                <div className="font-semibold text-textPrimary">Email</div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-primary hover:underline break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary p-2.5 rounded-full shrink-0">
                <Clock className="w-5 h-5" aria-hidden />
              </span>
              <div>
                <div className="font-semibold text-textPrimary">Horario</div>
                <p className="text-sm text-textSecondary">
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.weekend}
                </p>
                <p className="text-sm text-emergency font-semibold mt-1">
                  Urgencias 24h: {siteConfig.emergency.phoneDisplay} (HUVEMUR)
                </p>
              </div>
            </li>
          </ul>

          <div className="rounded-card overflow-hidden border border-borderc">
            <iframe
              title="Mapa de Floridablanca Veterinarios"
              src={siteConfig.address.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full aspect-[4/3] border-0"
            />
          </div>
          <a
            href={siteConfig.address.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Cómo llegar (Google Maps)
            <ExternalLink className="w-4 h-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
