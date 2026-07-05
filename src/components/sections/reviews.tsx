"use client"

import { useState, useEffect, useCallback } from "react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { REVIEWS } from "@/lib/constants"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function Reviews() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % REVIEWS.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const review = REVIEWS[current]

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  return (
    <Section id="reviews" variant="default">
      <Container>
        <SectionHeader
          title="Lo que dicen nuestros jugadores"
          subtitle="Opiniones reales de personas que viven el pádel en Padel Zenter"
        />

        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card padding="lg" className="text-center">
                  <Quote className="h-10 w-10 text-accent/30 mx-auto mb-4" />

                  <div className="flex items-center justify-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? "fill-accent text-accent" : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-lg text-foreground leading-relaxed italic">
                    {review.text}
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <p className="text-xs text-muted">{review.date}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Reseña anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir a reseña ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Siguiente reseña"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
