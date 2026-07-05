"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, SITE_NAME, BOOKING_URL } from "@/lib/constants"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrollPosition(24)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={scrolled ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-border" : "fixed top-0 left-0 right-0 z-50 glass shadow-sm"}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label={`Ir al inicio de ${SITE_NAME}`}
            >
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={140}
                height={47}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button href={BOOKING_URL} size="sm" variant="primary">
                Reservar
              </Button>
            </div>

            <button
              className="lg:hidden p-2 -mr-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-xl">
            <div className="p-6 pt-20">
              <nav className="flex flex-col gap-4" aria-label="Menú móvil">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary py-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <Button href={BOOKING_URL} size="md" variant="primary" className="w-full">
                    Reservar
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
