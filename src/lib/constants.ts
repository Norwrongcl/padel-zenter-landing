import type { NavLink, Service, Facility, Tournament, Review, Stat, GalleryImage } from "@/types"

export const SITE_NAME = "Padel Zenter"
export const SITE_URL = "https://padelzenter.cl"
export const BOOKING_URL = "https://reservas.padelzenter.cl"

export const CONTACT = {
  phone: "+56912345678",
  whatsapp: "56912345678",
  email: "contacto@padelzenter.cl",
  address: "Av. Principal 1234, Gómez Carreño, Viña del Mar",
  instagram: "https://instagram.com/padelzenter",
  googleMaps: "https://maps.google.com/?q=Padel+Zenter+Viña+del+Mar",
}

export const BUSINESS_HOURS = {
  weekdays: "07:00 - 23:00",
  saturday: "08:00 - 22:00",
  sunday: "08:00 - 21:00",
}

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Canchas", href: "/canchas" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Torneos", href: "/torneos" },
  { label: "Contacto", href: "/contacto" },
]

export const FACILITIES: Facility[] = [
  { icon: "Grid3X3", title: "Canchas Profesionales", description: "Superficie de césped sintético de última generación con marcación oficial World Padel Tour." },
  { icon: "Lightbulb", title: "Iluminación LED", description: "Sistema de iluminación LED de alta eficiencia para juego nocturno sin sombras ni reflejos." },
  { icon: "Leaf", title: "Pasto Profesional", description: "Césped sintético profesional con arena de sílice, diseñado para máximo rendimiento y seguridad." },
  { icon: "ShowerHead", title: "Camarines", description: "Vestidores amplios con duchas de agua caliente, lockers individuales y zona de secado." },
  { icon: "Coffee", title: "Cafetería", description: "Espacio gastronómico con café de especialidad, snacks saludables y bebidas isotónicas." },
  { icon: "Car", title: "Estacionamientos", description: "Amplio estacionamiento privado y seguro con capacidad para más de 30 vehículos." },
  { icon: "Trees", title: "Áreas Comunes", description: "Zonas de descanso al aire libre con sombra, wifi gratuito y pantalla de resultados en vivo." },
]

export const SERVICES: Service[] = [
  { icon: "Clock", title: "Arriendo de Canchas", description: "Reserva tu cancha por hora. Sistema online rápido y disponible 24/7." },
  { icon: "User", title: "Clases Particulares", description: "Entrenamiento personalizado con profesores certificados. Todos los niveles." },
  { icon: "Users", title: "Clases Grupales", description: "Aprende en grupo. Máximo 4 alumnos por profesor para atención personalizada." },
  { icon: "GraduationCap", title: "Academia", description: "Programa de formación continua para niños, jóvenes y adultos. Metodología propia." },
  { icon: "Trophy", title: "Torneos", description: "Competencias mensuales por categorías. Premios, ranking y transmisión en vivo." },
  { icon: "CalendarDays", title: "Eventos", description: "Organización de campeonatos empresariales, cumpleaños y eventos corporativos." },
  { icon: "CupSoda", title: "Cafetería", description: "Café de especialidad, jugos naturales, sándwiches gourmet y opciones saludables." },
  { icon: "ShoppingBag", title: "Pro Shop", description: "Paletas, indumentaria y accesorios de las mejores marcas. Descuentos para socios." },
]

export const TOURNAMENTS: Tournament[] = [
  {
    id: "1",
    date: "20 Julio 2026",
    category: "Tercera Categoría",
    spots: 8,
    totalSpots: 16,
    prize: "$150.000 + Trofeo",
    image: "/images/tournament-1.jpg",
  },
  {
    id: "2",
    date: "10 Agosto 2026",
    category: "Cuarta Categoría",
    spots: 12,
    totalSpots: 16,
    prize: "$100.000 + Medalla",
    image: "/images/tournament-2.jpg",
  },
  {
    id: "3",
    date: "7 Septiembre 2026",
    category: "Damas Tercera",
    spots: 14,
    totalSpots: 16,
    prize: "$150.000 + Trofeo",
    image: "/images/tournament-3.jpg",
  },
]

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Carlos Muñoz",
    avatar: "",
    rating: 5,
    text: "Excelentes canchas. La iluminación es perfecta para jugar de noche. El mejor club de pádel de Viña del Mar sin duda.",
    date: "Junio 2026",
  },
  {
    id: "2",
    name: "María Paz Soto",
    avatar: "",
    rating: 5,
    text: "Empecé como principiante en la academia y en 6 meses ya estoy jugando torneos. Los profesores son excepcionales.",
    date: "Mayo 2026",
  },
  {
    id: "3",
    name: "Diego Arancibia",
    avatar: "",
    rating: 5,
    text: "El sistema de reservas es muy fácil de usar. Reservo desde el celular y llego directo a jugar. 100% recomendado.",
    date: "Junio 2026",
  },
  {
    id: "4",
    name: "Sofía Contreras",
    avatar: "",
    rating: 5,
    text: "Ambiente increíble. La cafetería tiene opciones muy ricas y los camarines siempre impecables.",
    date: "Abril 2026",
  },
  {
    id: "5",
    name: "Pedro Valdivia",
    avatar: "",
    rating: 5,
    text: "Juego en varios clubes de la región y Padel Zenter tiene las mejores instalaciones. Pasto de primer nivel.",
    date: "Mayo 2026",
  },
]

export const STATS: Stat[] = [
  { label: "Canchas", value: 3, suffix: "" },
  { label: "Jugadores", value: 1000, suffix: "+", prefix: "" },
  { label: "Torneos", value: 50, suffix: "+" },
  { label: "Horas Reservadas", value: 15000, suffix: "" },
]

export const GALLERY_IMAGES: GalleryImage[] = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  src: `/images/gallery-${i + 1}.jpg`,
  alt: `Padel Zenter — Foto ${i + 1}`,
  width: 800,
  height: i % 3 === 0 ? 1000 : 600,
  category: i < 4 ? "canchas" : i < 8 ? "torneos" : "club",
}))

export const ABOUT_CONTENT = {
  title: "Sobre Nosotros",
  subtitle: "Más que un club, una comunidad",
  paragraphs: [
    "Padel Zenter nace de la pasión por el pádel y el deporte como estilo de vida. Somos un club creado por jugadores, para jugadores, con la misión de entregar la mejor experiencia deportiva en la región de Valparaíso.",
    "Nuestras instalaciones han sido diseñadas con los más altos estándares internacionales, incorporando tecnología de punta en iluminación, superficies y sistemas de gestión para que cada visita sea inolvidable.",
    "Creemos en el deporte como vehículo de transformación social, por eso trabajamos activamente con las comunidades locales, escuelas y organizaciones para hacer del pádel un deporte cada vez más accesible.",
  ],
  mission: "Entregar una experiencia deportiva de clase mundial, combinando instalaciones de primer nivel con un servicio excepcional y una comunidad vibrante.",
  vision: "Ser el referente del pádel en Chile, expandiendo nuestra propuesta de valor a nuevas ciudades y consolidando una red de clubes que transformen la forma en que se vive el deporte.",
  values: [
    { label: "Excelencia", description: "En cada detalle de nuestras instalaciones y servicios." },
    { label: "Comunidad", description: "Fomentamos relaciones genuinas entre nuestros miembros." },
    { label: "Innovación", description: "Tecnología al servicio del deporte y la experiencia." },
    { label: "Pasión", description: "Amamos lo que hacemos y se nota en cada rincón." },
  ],
}
