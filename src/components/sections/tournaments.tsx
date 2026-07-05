"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TOURNAMENTS, BOOKING_URL } from "@/lib/constants"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useInView } from "@/hooks/use-in-view"
import { Calendar, Users, Trophy, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Tournaments() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <Section id="tournaments" variant="default">
      <Container>
        <SectionHeader
          title="Próximos Torneos"
          subtitle="Compite, mejora tu ranking y sé parte de la comunidad más grande de pádel"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TOURNAMENTS.map((tournament) => (
            <motion.div key={tournament.id} variants={fadeInUp}>
              <Card hover padding="none" className="overflow-hidden group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tournament.image}
                    alt={`Torneo ${tournament.category}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="accent">{tournament.category}</Badge>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Calendar className="h-4 w-4 text-primary" />
                      {tournament.date}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Users className="h-4 w-4 text-primary" />
                      {tournament.spots} de {tournament.totalSpots} cupos disponibles
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Trophy className="h-4 w-4 text-accent" />
                      <span className="font-semibold text-foreground">{tournament.prize}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full transition-all duration-500"
                            style={{
                              width: `${(tournament.spots / tournament.totalSpots) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                      <span className="ml-3 text-xs font-medium text-muted">
                        {tournament.totalSpots - tournament.spots} cupos
                      </span>
                    </div>

                    <Button href={BOOKING_URL} variant="primary" size="md" className="w-full">
                      Inscribirse
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
