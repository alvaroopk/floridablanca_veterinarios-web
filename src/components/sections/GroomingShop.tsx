import Image from 'next/image'
import Link from 'next/link'
import { Scissors, ShoppingBag } from 'lucide-react'

export default function GroomingShop() {
  return (
    <section
      id="peluqueria-tienda"
      className="container-page py-20 md:py-28"
    >
      <div className="max-w-3xl">
        <span className="text-accent font-semibold text-sm uppercase tracking-wide">
          Otros servicios
        </span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 text-textPrimary text-balance">
          Peluquería canina y tienda para mascotas en Murcia
        </h2>
        <p className="mt-3 text-textSecondary text-base md:text-lg">
          Dos servicios más para cuidar a tu mascota en el día a día, en la
          misma clínica.
        </p>
      </div>

      <div className="mt-12 space-y-10 md:space-y-14">
        {/* Peluquería */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?w=1200&q=80"
              alt="Peluquería canina en Murcia: peluquera profesional cepillando un perro"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <Scissors className="w-9 h-9 text-accent mb-3" aria-hidden />
            <h3 className="font-display font-bold text-2xl text-textPrimary">
              Peluquería canina y felina en Murcia
            </h3>
            <p className="mt-3 text-textSecondary leading-relaxed">
              Peluquera profesional con más de 20 años de experiencia. Baño,
              corte, deslanado y cuidados estéticos para perros y gatos, con
              todo el cariño y a unos minutos del centro de Murcia.
            </p>
            <Link
              href="#contacto"
              aria-label="Pedir cita de peluquería canina y felina en Murcia"
              className="inline-block mt-5 border-2 border-primary text-primary font-semibold px-5 py-2.5 rounded-card hover:bg-primary hover:text-white transition-colors"
            >
              Pedir cita peluquería
            </Link>
          </div>
        </div>

        {/* Tienda */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="md:order-2 relative aspect-[4/3] rounded-card overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1200&q=80"
              alt="Tienda veterinaria en Murcia con piensos, accesorios y antiparasitarios para mascotas"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <ShoppingBag className="w-9 h-9 text-accent mb-3" aria-hidden />
            <h3 className="font-display font-bold text-2xl text-textPrimary">
              Tienda: pienso, antiparasitarios y accesorios
            </h3>
            <p className="mt-3 text-textSecondary leading-relaxed">
              Piensos de alta gama (gama veterinaria y comercial),
              antiparasitarios, snacks, juguetes y accesorios. Te asesoramos
              según la raza, edad y estado de salud de tu mascota.
            </p>
            <Link
              href="#contacto"
              aria-label="Visitar la tienda de Floridablanca Veterinarios en Murcia"
              className="inline-block mt-5 border-2 border-primary text-primary font-semibold px-5 py-2.5 rounded-card hover:bg-primary hover:text-white transition-colors"
            >
              Visítanos en la clínica
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
