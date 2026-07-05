import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"

export const dynamic = "force-static"

const routes = ["", "/nosotros", "/canchas", "/servicios", "/torneos", "/contacto"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  })) as MetadataRoute.Sitemap
}
