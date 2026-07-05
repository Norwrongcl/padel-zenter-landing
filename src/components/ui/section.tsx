import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

type SectionVariant = "default" | "dark" | "primary" | "glass"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: SectionVariant
  id?: string
}

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-background",
  dark: "bg-foreground text-white",
  primary: "bg-primary text-white",
  glass: "bg-white/50 backdrop-blur-sm",
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", id, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("py-20 md:py-28 lg:py-32", variantClasses[variant], className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = "Section"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-20 h-1 bg-accent rounded-full" />
    </div>
  )
}

SectionHeader.displayName = "SectionHeader"

export { Section, SectionHeader, type SectionProps, type SectionVariant }
