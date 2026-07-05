"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { ABOUT_CONTENT } from "@/lib/constants"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useInView } from "@/hooks/use-in-view"
import { Target, Eye, Sparkles } from "lucide-react"
import Image from "next/image"

export function About() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <Section id="about" variant="default">
      <Container>
        <SectionHeader
          title={ABOUT_CONTENT.title}
          subtitle={ABOUT_CONTENT.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <Image
                src="/images/about.jpg"
                alt="Canchas de Padel Zenter"
                width={600}
                height={750}
                className="rounded-xl w-full object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-foreground rounded-lg py-3 px-5 shadow-lg hidden md:block">
                <p className="text-sm font-semibold">Desde 2024</p>
                <p className="text-xs text-foreground/70">Transformando el pádel</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="space-y-6">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeInUp}
                  className="text-muted leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-8 flex items-start gap-4 p-5 bg-primary-light rounded-lg">
              <Target className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground">Misión</h4>
                <p className="text-sm text-muted mt-1">{ABOUT_CONTENT.mission}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-4 flex items-start gap-4 p-5 bg-accent-light rounded-lg">
              <Eye className="h-6 w-6 text-foreground shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground">Visión</h4>
                <p className="text-sm text-muted mt-1">{ABOUT_CONTENT.vision}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-2 gap-3">
              {ABOUT_CONTENT.values.map((value) => (
                <Badge key={value.label} variant="primary" className="justify-center py-2 text-sm">
                  <Sparkles className="h-3 w-3 mr-1" />
                  {value.label}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
