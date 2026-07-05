"use client"

import { useEffect, useState } from "react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { STATS } from "@/lib/constants"
import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/animations"
import { useInView } from "@/hooks/use-in-view"

function AnimatedCounter({
  value,
  suffix,
  prefix = "",
  duration = 2,
}: {
  value: number
  suffix: string
  prefix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [inView, value, duration])

  const formattedCount = count.toLocaleString("es-CL")

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        {prefix}
        {formattedCount}
        {suffix}
      </p>
    </div>
  )
}

export function Stats() {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <Section variant="primary">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
              <p className="mt-3 text-primary-light text-sm font-medium uppercase tracking-wide text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
