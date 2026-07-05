import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Facilities } from "@/components/sections/facilities"
import { Services } from "@/components/sections/services"
import { Gallery } from "@/components/sections/gallery"
import { Tournaments } from "@/components/sections/tournaments"
import { Reviews } from "@/components/sections/reviews"
import { Stats } from "@/components/sections/stats"
import { CTA } from "@/components/sections/cta"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <main id="main-content">
        <Hero />
        <About />
        <Facilities />
        <Services />
        <Gallery />
        <Tournaments />
        <Reviews />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
