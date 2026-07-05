"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { SERVICES } from "@/lib/constants"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useInView } from "@/hooks/use-in-view"
import {
  Clock,
  User,
  Users,
  GraduationCap,
  Trophy,
  CalendarDays,
  CupSoda,
  ShoppingBag,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  User,
  Users,
  GraduationCap,
  Trophy,
  CalendarDays,
  CupSoda,
  ShoppingBag,
}

export function Services() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <Section id="services" variant="default">
      <Container>
        <SectionHeader
          title="Servicios"
          subtitle="Todo lo que necesitas para vivir el pádel al máximo nivel"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Clock
            return (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card hover padding="lg" className="h-full group">
                  <div className="w-12 h-12 rounded-md bg-accent-light flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {service.description}
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
