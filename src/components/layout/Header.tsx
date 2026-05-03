'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Phone, X, AlertTriangle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow ${
        scrolled ? 'shadow-soft bg-white' : 'bg-white/95 backdrop-blur'
      }`}
    >
      <div className="bg-emergency text-white text-xs sm:text-sm">
        <div className="container-page py-1.5 flex items-center justify-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden />
          <span>
            Urgencias 24h:{' '}
            <a
              href={`tel:${siteConfig.emergency.phoneTel}`}
              className="font-semibold underline underline-offset-2 hover:opacity-90"
            >
              {siteConfig.emergency.phoneDisplay}
            </a>{' '}
            (HUVEMUR)
          </span>
        </div>
      </div>

      <div className="container-page flex items-center justify-between py-3">
        <Link
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Floridablanca Veterinarios — Inicio"
        >
          <Image
            src="/assets/logo_floridablanca.png"
            alt="Logo de Floridablanca Veterinarios — clínica veterinaria en Murcia"
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            priority
          />
          <span className="font-display font-bold text-primary text-base sm:text-lg leading-tight">
            Floridablanca
            <span className="block text-textSecondary text-xs sm:text-sm font-medium">
              Veterinarios
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-textPrimary hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
            aria-label={`Llamar al ${siteConfig.phone.display}`}
          >
            <Phone className="w-4 h-4" aria-hidden />
            {siteConfig.phone.display}
          </a>
          <Link
            href="#contacto"
            className="bg-primary hover:bg-primary-light text-white text-sm font-semibold px-4 py-2 rounded-card transition-colors"
          >
            Pedir cita
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-primary"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-borderc bg-white">
          <nav className="container-page py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1.5 text-base font-medium text-textPrimary hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-borderc">
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <Phone className="w-4 h-4" aria-hidden />
                {siteConfig.phone.display}
              </a>
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className="bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-card text-center"
              >
                Pedir cita
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
