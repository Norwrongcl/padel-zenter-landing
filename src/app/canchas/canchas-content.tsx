"use client"

import { BOOKING_URL } from "@/lib/constants"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Star, Clock, Check } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const COURT_FEATURES = [
  {
    icon: Zap,
    title: "Iluminación LED profesional",
    description: "Juega de noche sin sombras ni reflejos. Sistema de última generación distribuido uniformemente.",
  },
  {
    icon: Shield,
    title: "Superficie estándar WPT",
    description: "Césped sintético con arena de sílice, amortiguación óptima y marcación oficial para un juego profesional.",
  },
  {
    icon: Star,
    title: "Mantención diaria",
    description: "Canchas cepilladas, limpias y en perfecto estado todos los días del año.",
  },
  {
    icon: Clock,
    title: "Reserva 24/7",
    description: "Elige tu horario desde el celular y llega directo a jugar. Confirmación inmediata.",
  },
]

const GALLERY = [
  { src: "/images/hero.jpg", alt: "Jugadores de pádel en acción" },
  { src: "/images/about.jpg", alt: "Vista de canchas de pádel" },
  { src: "/images/tournament-1.jpg", alt: "Torneo de pádel" },
]

const STATS = [
  { value: "3", label: "canchas profesionales" },
  { value: "07-23", label: "hrs todos los días" },
  { value: "WPT", label: "superficie oficial" },
]

export function CanchasContent() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        {/* Hero visual */}
        <section className="relative h-[60vh] min-h-[480px] max-h-[720px] flex items-end overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Canchas profesionales de pádel en Padel Zenter"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

          <Container className="relative z-10 pb-16 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-foreground text-xs font-semibold mb-4">
                Canchas profesionales
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Juega en las mejores canchas de Viña del Mar
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-xl">
                Superficie WPT, iluminación LED y camarines. Reserva tu horario y vive el pádel como se merece.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href={BOOKING_URL} size="lg" variant="accent">
                  Reservar Cancha
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Stats bar */}
        <div className="relative z-20 -mt-10 mx-4 sm:mx-6 lg:mx-8">
          <Container>
            <div className="bg-white rounded-xl shadow-lg border border-border p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {STATS.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* Features */}
        <Section className="!pt-16 md:!pt-20">
          <Container>
            <SectionHeader
              title="Diseñadas para jugar en serio"
              subtitle="Cada detalle está pensado para que disfrutes cada punto al máximo"
            />

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
              {COURT_FEATURES.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                      <p className="mt-1 text-muted leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </Section>

        {/* Gallery strip */}
        <Section variant="dots" className="!py-16 md:!py-24">
          <Container>
            <div className="grid md:grid-cols-3 gap-4">
              {GALLERY.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Includes */}
        <Section>
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
                Tu reserva incluye
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Uso de cancha por 1 hora",
                  "Iluminación LED incluida",
                  "Estacionamiento gratuito",
                  "Acceso a camarines",
                  "WiFi de alta velocidad",
                  "Asesoría para principiantes",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/60 border border-border"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent-light flex items-center justify-center shrink-0">
                      <Check className="h-3.5 w-3.5 text-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA */}
        <Section variant="gradient">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white">¿Listo para jugar?</h2>
              <p className="mt-4 text-lg text-white/80">
                Desde $12.000 / hora. Reserva tu cancha favorita en segundos.
              </p>
              <div className="mt-8">
                <Button href={BOOKING_URL} size="lg" variant="accent">
                  Reservar Ahora
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
