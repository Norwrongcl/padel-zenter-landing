"use client"

import { Button } from "@/components/ui/button"
import { SITE_NAME, BOOKING_URL } from "@/lib/constants"
import { scrollToElement } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import Image from "next/image"

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

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/logo.png"
            alt={SITE_NAME}
            width={220}
            height={75}
            className="h-14 md:h-20 w-auto mx-auto brightness-0 invert"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          Vive el pádel
          <br />
          como nunca antes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Reserva fácilmente tu cancha, participa en torneos y disfruta una experiencia
          deportiva de primer nivel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
            onClick={() => scrollToElement("about")}
          >
            Conocer el Club
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToElement("about")}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Desplazarse hacia abajo"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}
