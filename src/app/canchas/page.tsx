import type { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/constants"
import { CanchasContent } from "./canchas-content"

export const metadata: Metadata = {
  title: `Canchas de Pádel en Viña del Mar — ${SITE_NAME}`,
  description:
    "Arrienda canchas de pádel profesionales en Viña del Mar. Iluminación LED, pasto sintético de última generación y camarines. Reserva en línea 24/7.",
  keywords: [
    "Canchas de Pádel Viña del Mar",
    "Arriendo de Canchas",
    "Canchas de Pádel",
    "Pádel Gómez Carreño",
    "Reserva de Canchas",
    "Padel Zenter",
  ],
  alternates: {
    canonical: `${SITE_URL}/canchas`,
  },
  openGraph: {
    title: `Canchas de Pádel en Viña del Mar — ${SITE_NAME}`,
    description:
      "Arrienda canchas de pádel profesionales en Viña del Mar. Reserva en línea 24/7.",
    url: `${SITE_URL}/canchas`,
  },
}

export default function CanchasPage() {
  return <CanchasContent />
}
