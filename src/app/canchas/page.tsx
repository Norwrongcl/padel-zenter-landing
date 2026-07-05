import type { Metadata } from "next"
import { SITE_NAME, SITE_URL, BOOKING_URL } from "@/lib/constants"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Facilities } from "@/components/sections/facilities"
import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Star, Clock } from "lucide-react"
import Image from "next/image"

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

const COURT_FEATURES = [
  { icon: Zap, title: "Iluminación LED", description: "Sistema profesional sin sombras para juego nocturno." },
  { icon: Shield, title: "Superficie WPT", description: "Césped sintético con arena de sílice, estándar World Padel Tour." },
  { icon: Star, title: "Mantención Diaria", description: "Canchas en perfecto estado todos los días del año." },
  { icon: Clock, title: "Disponible 24/7", description: "Reserva en cualquier momento a través de nuestra plataforma." },
]

export default function CanchasPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 md:pt-24">
        <Section>
          <Container>
            <SectionHeader
              title="Nuestras Canchas"
              subtitle="Instalaciones de primer nivel para que disfrutes cada partido al máximo"
            />

            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { src: "/images/hero.jpg", alt: "Jugadores de pádel en una cancha profesional", label: "Juego intenso" },
                { src: "/images/about.jpg", alt: "Vista de canchas de pádel modernas", label: "Instalaciones premium" },
                { src: "/images/tournament-1.jpg", alt: "Torneo de pádel en acción", label: "Competencia y comunidad" },
              ].map((image) => (
                <Card key={image.src} padding="none" className="overflow-hidden group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                      {image.label}
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            <Facilities />
          </Container>
        </Section>

        <Section variant="default">
          <Container>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {COURT_FEATURES.map((feature) => (
                <Card key={feature.title} hover padding="lg" className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary-light flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted mt-1">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Badge variant="primary" className="mb-6">Desde $12.000 / hora</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿Listo para jugar?
              </h2>
              <p className="text-muted max-w-md mx-auto mb-8">
                Reserva tu cancha favorita en segundos. Elige fecha, horario y prepárate para jugar.
              </p>
              <Button href={BOOKING_URL} size="lg">
                Reservar Cancha
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
