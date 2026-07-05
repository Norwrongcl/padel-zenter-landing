import { type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "primary" | "accent" | "success" | "warning" | "error"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-foreground",
  primary: "bg-primary-light text-primary",
  accent: "bg-accent-light text-foreground",
  success: "bg-accent-light text-foreground",
  warning: "bg-amber-50 text-amber-700",
  error: "bg-red-50 text-red-700",
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-sm text-xs font-medium",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export { type BadgeProps, type BadgeVariant }
