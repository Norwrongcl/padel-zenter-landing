import type { Metadata } from "next"
import { SITE_NAME, SITE_URL, CONTACT, BUSINESS_HOURS } from "@/lib/constants"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Section, SectionHeader } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: `Contacto — ${SITE_NAME}`,
  description:
    "Contáctanos. Encuentra nuestra dirección, teléfono, email y horarios. Estamos ubicados en Gómez Carreño, Viña del Mar.",
  keywords: [
    "Contacto Pádel",
    "Pádel Viña del Mar",
    "Padel Zenter Contacto",
    "Club de Pádel Viña del Mar",
  ],
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  openGraph: {
    title: `Contacto — ${SITE_NAME}`,
    description:
      "Contáctanos. Dirección, teléfono y horarios de Padel Zenter en Viña del Mar.",
    url: `${SITE_URL}/contacto`,
  },
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-20 md:pt-24">
        <Section>
          <Container>
            <SectionHeader
              title="Contáctanos"
              subtitle="Estamos aquí para ayudarte. Escríbenos, llámanos o visítanos."
            />

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card padding="lg">
                <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary-light flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Dirección</p>
                      <p className="text-muted text-sm mt-1">{CONTACT.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary-light flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Teléfono</p>
                      <a href={`tel:${CONTACT.phone}`} className="text-muted text-sm mt-1 hover:text-primary transition-colors block">
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary-light flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-muted text-sm mt-1 hover:text-primary transition-colors block">
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary-light flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Horarios</p>
                      <div className="text-muted text-sm mt-1 space-y-1">
                        <p>Lun-Vie: {BUSINESS_HOURS.weekdays}</p>
                        <p>Sábado: {BUSINESS_HOURS.saturday}</p>
                        <p>Domingo: {BUSINESS_HOURS.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card padding="lg" className="flex flex-col justify-center items-center text-center bg-primary">
                <div className="text-white">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-2">¿Prefieres WhatsApp?</h3>
                  <p className="text-white/70 text-sm mb-6">
                    Escríbenos directamente y te responderemos en minutos.
                  </p>
                  <Button
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    variant="accent"
                    size="lg"
                  >
                    Enviar WhatsApp
                  </Button>
                </div>
              </Card>
            </div>
          </Container>
        </Section>

        <Section variant="default" className="!pt-0">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Card padding="none" className="overflow-hidden mb-6">
                <div className="relative h-56 md:h-72">
                  <Image
                    src="/images/hero.jpg"
                    alt="Vista del club de pádel Padel Zenter"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1024px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-semibold">Visítanos en Viña del Mar</p>
                    <p className="text-xs text-white/80">Club, canchas y atención directa</p>
                  </div>
                </div>
              </Card>

              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-border shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.997640861669!2d-71.52900512430078!3d-33.02450017355738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dd0c3ed61c1b%3A0x9c7a3e557c0c97e5!2sG%C3%B3mez%20Carre%C3%B1o%2C%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Padel Zenter"
                />
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
