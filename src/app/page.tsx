import { Hero } from "@/components/sections/hero"
import { Facilities } from "@/components/sections/facilities"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Tournaments } from "@/components/sections/tournaments"
import { Reviews } from "@/components/sections/reviews"
import { Stats } from "@/components/sections/stats"
import { CTA } from "@/components/sections/cta"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Facilities />
        <Services />
        <About />
        <Tournaments />
        <Reviews />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
