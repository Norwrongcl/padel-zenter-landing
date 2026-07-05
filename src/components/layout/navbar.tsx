"use client"

import { useState, useEffect } from "react"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { Button } from "@/components/ui/button"
import { cn, scrollToElement } from "@/lib/utils"
import { NAV_LINKS, SITE_NAME, BOOKING_URL } from "@/lib/constants"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const scrolled = useScrollPosition(50)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isGlass = scrolled || !transparent

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

  function handleNavClick(href: string) {
    setMobileOpen(false)
    if (href.startsWith("#")) {
      scrollToElement(href.slice(1))
    }
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isGlass
            ? "glass shadow-sm"
            : "bg-gradient-to-b from-black/50 via-black/25 to-transparent"
        )}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href={transparent ? "#hero" : "/"}
              className="flex items-center gap-2"
              onClick={(e) => {
                if (transparent) {
                  e.preventDefault()
                  scrollToElement("hero")
                }
              }}
              aria-label={`Ir al inicio de ${SITE_NAME}`}
            >
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={140}
                height={47}
                className={cn(
                  "h-8 md:h-10 w-auto transition-all duration-300",
                  !isGlass && "brightness-0 invert"
                )}
                priority
              />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 drop-shadow-sm",
                    isGlass
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button href={BOOKING_URL} size="sm" variant={isGlass ? "primary" : "accent"}>
                Reservar
              </Button>
            </div>

            <button
              className="lg:hidden p-2 -mr-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className={cn("h-6 w-6", isGlass ? "text-foreground" : "text-white")} />
              ) : (
                <Menu className={cn("h-6 w-6", isGlass ? "text-foreground" : "text-white")} />
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
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault()
                        handleNavClick(link.href)
                      } else {
                        setMobileOpen(false)
                      }
                    }}
                    className="text-base font-medium text-foreground hover:text-primary py-2 transition-colors"
                  >
                    {link.label}
                  </a>
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
