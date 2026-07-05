import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "@/components/ui/button"

describe("Button", () => {
  it("renders with default variant and size", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("bg-primary")
  })

  it("renders as a link when href is provided", () => {
    render(<Button href="/test">Go to test</Button>)
    const link = screen.getByRole("link", { name: /go to test/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
  })

  it("applies accent variant correctly", () => {
    render(<Button variant="accent">Accent</Button>)
    const button = screen.getByRole("button", { name: /accent/i })
    expect(button).toHaveClass("bg-accent")
  })

  it("applies outline variant correctly", () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole("button", { name: /outline/i })
    expect(button).toHaveClass("border-primary")
  })

  it("applies ghost variant correctly", () => {
    render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByRole("button", { name: /ghost/i })
    expect(button).toHaveClass("text-foreground")
  })

  it("applies size classes correctly", () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByRole("button", { name: /large/i })
    expect(button).toHaveClass("px-8")
  })

  it("calls onClick handler", async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    render(<Button onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole("button", { name: /click/i }))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it("supports disabled state", () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole("button", { name: /disabled/i })
    expect(button).toBeDisabled()
  })
})
