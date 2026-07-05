"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { FACILITIES } from "@/lib/constants"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useInView } from "@/hooks/use-in-view"
import {
  Grid3X3,
  Lightbulb,
  Leaf,
  ShowerHead,
  Coffee,
  Car,
  Trees,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Grid3X3,
  Lightbulb,
  Leaf,
  ShowerHead,
  Coffee,
  Car,
  Trees,
}

export function Facilities() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <Section id="facilities" variant="default">
      <Container>
        <SectionHeader
          title="Nuestras Instalaciones"
          subtitle="Espacios diseñados para el máximo rendimiento y confort"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FACILITIES.map((facility) => {
            const Icon = iconMap[facility.icon] || Grid3X3
            return (
              <motion.div key={facility.title} variants={fadeInUp}>
                <Card hover padding="lg" className="h-full group">
                  <div className="w-12 h-12 rounded-md bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{facility.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {facility.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
