export interface NavLink {
  label: string
  href: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface Facility {
  icon: string
  title: string
  description: string
}

export interface Tournament {
  id: string
  date: string
  category: string
  spots: number
  totalSpots: number
  prize: string
  image: string
}

export interface Review {
  id: string
  name: string
  avatar: string
  rating: number
  text: string
  date: string
}

export interface Stat {
  label: string
  value: number
  suffix: string
  prefix?: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  category?: string
}
