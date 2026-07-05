import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Container } from "@/components/ui/container"

describe("Container", () => {
  it("renders children correctly", () => {
    render(<Container>Container content</Container>)
    expect(screen.getByText("Container content")).toBeInTheDocument()
  })

  it("applies max width class based on size", () => {
    const { container } = render(<Container size="sm">Small</Container>)
    expect(container.firstChild).toHaveClass("max-w-3xl")
  })

  it("uses xl max width by default", () => {
    const { container } = render(<Container>Default</Container>)
    expect(container.firstChild).toHaveClass("max-w-7xl")
  })
})
