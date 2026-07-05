"use client"

import { Button } from "@/components/ui/button"
import { BOOKING_URL } from "@/lib/constants"
import { scrollToElement } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

function PadelBall() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18.5" stroke="white" strokeWidth="2.5" strokeOpacity="0.6" />
      <path
        d="M4 16 Q12 10 20 16 Q28 22 36 16"
        stroke="white"
        strokeWidth="2.5"
        strokeOpacity="0.6"
        fill="none"
      />
      <path
        d="M4 24 Q12 30 20 24 Q28 18 36 24"
        stroke="white"
        strokeWidth="2.5"
        strokeOpacity="0.6"
        fill="none"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Presentación principal"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Jugadores de pádel en acción en Padel Zenter"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          Vive el pádel
          <br />
          como nunca antes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Reserva fácilmente tu cancha, participa en torneos y disfruta una experiencia
          deportiva de primer nivel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={BOOKING_URL} size="lg" variant="accent">
            Reservar Ahora
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={() => scrollToElement("facilities")}
          >
            Conocer el Club
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToElement("facilities")}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Desplazarse hacia abajo"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <PadelBall />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
