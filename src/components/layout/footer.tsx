"use client"

import { SITE_NAME, CONTACT, BUSINESS_HOURS, NAV_LINKS, BOOKING_URL } from "@/lib/constants"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import {
  Camera,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-white" id="contact" role="contentinfo">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt={SITE_NAME}
              width={160}
              height={54}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Vive el pádel como nunca antes. El club más moderno de Viña del Mar.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Enlaces Rápidos
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Enlaces del footer">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Horarios
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Lunes a Viernes</p>
                  <p className="text-white font-medium">{BUSINESS_HOURS.weekdays}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Sábado</p>
                  <p className="text-white font-medium">{BUSINESS_HOURS.saturday}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Domingo</p>
                  <p className="text-white font-medium">{BUSINESS_HOURS.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-gray-300">{CONTACT.address}</p>
              </div>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 text-accent shrink-0" />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                {CONTACT.email}
              </a>
              <Button href={BOOKING_URL} size="sm" variant="accent" className="mt-2">
                Reservar Ahora
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
