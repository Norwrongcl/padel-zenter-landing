"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { BOOKING_URL, SITE_NAME } from "@/lib/constants"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <Section variant="gradient" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            ¿Listo para jugar?
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Reserva tu cancha en segundos y vive la mejor experiencia de pádel en {SITE_NAME}.
          </p>
          <div className="mt-10">
            <Button href={BOOKING_URL} size="lg" variant="accent">
              Reservar Ahora
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
