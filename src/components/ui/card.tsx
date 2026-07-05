import { type HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glass?: boolean
  padding?: "none" | "sm" | "md" | "lg"
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, glass = false, padding = "md", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-lg shadow-sm",
          hover && "hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out",
          glass && "glass",
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

function CardHeader({ className, title, description, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
      <h3 className="text-xl font-semibold text-foreground mt-3">{title}</h3>
      {description && <p className="text-muted text-sm mt-1">{description}</p>}
    </div>
  )
}

CardHeader.displayName = "CardHeader"

export { Card, CardHeader, type CardProps, type CardHeaderProps }
