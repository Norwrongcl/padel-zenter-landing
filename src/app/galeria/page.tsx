import type { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/constants"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Gallery } from "@/components/sections/gallery"

export const metadata: Metadata = {
  title: `Galería de Fotos — ${SITE_NAME}`,
  description:
    "Explora nuestra galería de imágenes: canchas, torneos, instalaciones y momentos destacados en Padel Zenter, el mejor club de pádel de Viña del Mar.",
  keywords: [
    "Fotos Pádel",
    "Galería Pádel",
    "Instalaciones Pádel",
    "Canchas de Pádel Fotos",
    "Padel Zenter",
  ],
  alternates: {
    canonical: `${SITE_URL}/galeria`,
  },
  openGraph: {
    title: `Galería de Fotos — ${SITE_NAME}`,
    description:
      "Explora nuestra galería: canchas, torneos e instalaciones de Padel Zenter.",
    url: `${SITE_URL}/galeria`,
  },
}

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 md:pt-24">
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
