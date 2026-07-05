import type { Metadata } from "next"
import { SITE_NAME, SITE_URL, BOOKING_URL } from "@/lib/constants"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Services } from "@/components/sections/services"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: `Servicios de Pádel — ${SITE_NAME}`,
  description:
    "Clases particulares, clases grupales, academia de pádel, torneos, eventos corporativos y más. Descubre todos los servicios de Padel Zenter en Viña del Mar.",
  keywords: [
    "Clases de Pádel",
    "Academia de Pádel",
    "Torneos de Pádel",
    "Arriendo de Canchas",
    "Clases Particulares Pádel",
    "Padel Zenter",
  ],
  alternates: {
    canonical: `${SITE_URL}/servicios`,
  },
  openGraph: {
    title: `Servicios de Pádel — ${SITE_NAME}`,
    description:
      "Clases particulares, clases grupales, academia, torneos y más en Padel Zenter Viña del Mar.",
    url: `${SITE_URL}/servicios`,
  },
}

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 md:pt-24">
        <Services />
        <Section variant="default">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-muted mb-8">
                Contáctanos y te ayudaremos a encontrar el servicio perfecto para ti o tu grupo.
              </p>
              <Button href={BOOKING_URL} size="lg">
                Ver Todos los Servicios
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
