import type { Metadata } from "next"
import { SITE_NAME, SITE_URL, BOOKING_URL } from "@/lib/constants"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Tournaments } from "@/components/sections/tournaments"
import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Trophy, Users, Calendar, Medal, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: `Torneos de Pádel — ${SITE_NAME}`,
  description:
    "Participa en torneos de pádel por categorías en Viña del Mar. Premios, ranking, transmisión en vivo y más. Inscríbete ahora en Padel Zenter.",
  keywords: [
    "Torneos de Pádel",
    "Campeonatos de Pádel",
    "Pádel Viña del Mar",
    "Inscripción Torneos Pádel",
    "Competencias Pádel",
    "Padel Zenter",
  ],
  alternates: {
    canonical: `${SITE_URL}/torneos`,
  },
  openGraph: {
    title: `Torneos de Pádel — ${SITE_NAME}`,
    description:
      "Participa en torneos de pádel por categorías en Viña del Mar. Inscríbete ahora.",
    url: `${SITE_URL}/torneos`,
  },
}

const TOURNAMENT_INFO = [
  {
    icon: Trophy,
    title: "Categorías",
    description: "Tercera, Cuarta, Damas y Mixtos. Torneos para todos los niveles de juego.",
  },
  {
    icon: Users,
    title: "Formato",
    description: "Grupos + Eliminación directa. Mínimo 3 partidos garantizados por pareja.",
  },
  {
    icon: Calendar,
    title: "Frecuencia",
    description: "Torneos mensuales. Calendario anual con fechas publicadas con anticipación.",
  },
  {
    icon: Medal,
    title: "Premiación",
    description: "Trofeos, premios en efectivo y productos del Pro Shop para los ganadores.",
  },
]

export default function TorneosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 md:pt-24">
        <Tournaments />

        <Section variant="default">
          <Container>
            <SectionHeader
              title="Información General"
              subtitle="Todo lo que necesitas saber sobre nuestros torneos"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {TOURNAMENT_INFO.map((item) => (
                <Card key={item.title} hover padding="lg" className="text-center">
                  <div className="w-14 h-14 rounded-md bg-accent-light flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted mt-2">{item.description}</p>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors"
              >
                Ver calendario completo de torneos
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
