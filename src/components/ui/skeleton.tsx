import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "text" | "circular" | "rectangular" | "card"
}

const variantClasses = {
  text: "h-4 w-full rounded-sm",
  circular: "h-12 w-12 rounded-full",
  rectangular: "h-48 w-full rounded-lg",
  card: "h-64 w-full rounded-lg",
}

export function Skeleton({ className, variant = "text" }: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Cargando"
      className={cn(
        "animate-pulse bg-gray-200",
        variantClasses[variant],
        className
      )}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <Skeleton variant="rectangular" className="h-40" />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
      <Skeleton variant="text" className="w-full" />
    </div>
  )
}
