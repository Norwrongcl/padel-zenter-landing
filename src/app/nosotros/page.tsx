import type { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/constants"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { About } from "@/components/sections/about"

export const metadata: Metadata = {
  title: `Sobre Nosotros — ${SITE_NAME}`,
  description:
    "Conoce la historia, misión y valores de Padel Zenter, el club de pádel más moderno de Viña del Mar. Somos una comunidad apasionada por el deporte.",
  keywords: [
    "Pádel Viña del Mar",
    "Club de Pádel",
    "Padel Zenter",
    "Historia Pádel",
    "Comunidad Pádel",
  ],
  alternates: {
    canonical: `${SITE_URL}/nosotros`,
  },
  openGraph: {
    title: `Sobre Nosotros — ${SITE_NAME}`,
    description:
      "Conoce la historia, misión y valores de Padel Zenter, el club de pádel más moderno de Viña del Mar.",
    url: `${SITE_URL}/nosotros`,
  },
}

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <About />
      </main>
      <Footer />
    </>
  )
}
