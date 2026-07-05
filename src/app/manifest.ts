import type { MetadataRoute } from "next"
import { SITE_NAME } from "@/lib/constants"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "Reserva fácilmente tu cancha, participa en torneos y disfruta una experiencia deportiva de primer nivel.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#2563B4",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    lang: "es",
    categories: ["sports", "fitness"],
  }
}
