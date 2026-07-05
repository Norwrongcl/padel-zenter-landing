"use client"

import { useState, useCallback } from "react"
import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { GALLERY_IMAGES } from "@/lib/constants"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { useInView } from "@/hooks/use-in-view"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const CATEGORIES = [
  { key: "all", label: "Todas" },
  { key: "canchas", label: "Canchas" },
  { key: "torneos", label: "Torneos" },
  { key: "club", label: "Club" },
]

export function Gallery() {
  const [ref, inView] = useInView<HTMLDivElement>()
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  function nextImage() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }

  function prevImage() {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  return (
    <Section id="gallery" variant="default">
      <Container>
        <SectionHeader
          title="Galería"
          subtitle="Conoce nuestras instalaciones y vive la experiencia Padel Zenter"
        />

        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-primary text-white shadow-primary"
                  : "bg-white text-muted hover:text-foreground hover:bg-background"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filtered.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              className="break-inside-avoid"
            >
              <button
                onClick={() => openLightbox(index)}
                className="block w-full overflow-hidden rounded-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`Abrir imagen: ${image.alt}`}
              >
                <div className="relative bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
              aria-label="Cerrar galería"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 p-2 text-white/60 hover:text-white transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 p-2 text-white/60 hover:text-white transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto mx-auto object-contain rounded-lg"
                priority
              />
              <p className="text-center text-white/60 text-sm mt-4">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
