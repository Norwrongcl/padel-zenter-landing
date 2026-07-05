"use client"

import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "accent" | "outline" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-primary hover:shadow-lg",
  accent:
    "bg-accent text-foreground hover:bg-accent-hover shadow-accent hover:shadow-lg",
  outline:
    "border-2 border-primary text-primary hover:bg-primary-light",
  ghost:
    "text-foreground hover:bg-background",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variantClasses[variant],
      sizeClasses[size],
      className
    )

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize }
