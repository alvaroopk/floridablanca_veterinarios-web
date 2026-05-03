import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import EmergencyBanner from '@/components/sections/EmergencyBanner'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import GroomingShop from '@/components/sections/GroomingShop'
import WhyUs from '@/components/sections/WhyUs'
import Testimonials from '@/components/sections/Testimonials'
import Faq from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'

// La home reusa el title/description globales del layout, pero fija
// explícitamente el canónico para evitar duplicados con anclas (#servicios, etc.).
export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmergencyBanner />
      <About />
      <Services />
      <GroomingShop />
      <WhyUs />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
