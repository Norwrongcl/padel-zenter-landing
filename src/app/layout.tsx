import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { SITE_NAME, SITE_URL } from "@/lib/constants"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  themeColor: "#2563B4",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} — Vive el pádel como nunca antes`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Reserva fácilmente tu cancha, participa en torneos y disfruta una experiencia deportiva de primer nivel en el mejor club de pádel de Viña del Mar.",

  keywords: [
    "Pádel Viña del Mar",
    "Club de Pádel",
    "Canchas de Pádel",
    "Arriendo de Canchas",
    "Clases de Pádel",
    "Pádel Gómez Carreño",
    "Padel Zenter",
    "Torneos de Pádel",
    "Academia de Pádel",
    "Pádel Chile",
  ],

  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Vive el pádel como nunca antes`,
    description:
      "Reserva fácilmente tu cancha, participa en torneos y disfruta una experiencia deportiva de primer nivel.",
    url: SITE_URL,
    locale: "es_CL",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Club de Pádel en Viña del Mar`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Vive el pádel como nunca antes`,
    description:
      "Reserva fácilmente tu cancha, participa en torneos y disfruta una experiencia deportiva de primer nivel.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/manifest.json",

  other: {
    "application-name": SITE_NAME,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              name: SITE_NAME,
              description:
                "Club de pádel con canchas profesionales, academia, torneos y cafetería en Viña del Mar.",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              image: `${SITE_URL}/images/og-image.jpg`,
              telephone: "+56912345678",
              email: "contacto@padelzenter.cl",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Principal 1234",
                addressLocality: "Viña del Mar",
                addressRegion: "Valparaíso",
                addressCountry: "CL",
                postalCode: "2520000",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.0245,
                longitude: -71.5265,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "08:00",
                  closes: "21:00",
                },
              ],
              sameAs: ["https://instagram.com/padelzenter"],
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  )
}
