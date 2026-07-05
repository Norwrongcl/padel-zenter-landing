import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Section, SectionHeader } from "@/components/ui/section"

describe("Section", () => {
  it("renders with default variant", () => {
    const { container } = render(<Section id="test-section">Section content</Section>)
    expect(container.firstChild).toHaveClass("bg-background")
    expect(container.firstChild).toHaveAttribute("id", "test-section")
  })

  it("renders with dark variant", () => {
    const { container } = render(<Section variant="dark">Dark</Section>)
    expect(container.firstChild).toHaveClass("bg-foreground")
  })

  it("renders with primary variant", () => {
    const { container } = render(<Section variant="primary">Primary</Section>)
    expect(container.firstChild).toHaveClass("bg-primary")
  })
})

describe("SectionHeader", () => {
  it("renders title and subtitle", () => {
    render(<SectionHeader title="Hello" subtitle="World" />)
    expect(screen.getByText("Hello")).toBeInTheDocument()
    expect(screen.getByText("World")).toBeInTheDocument()
  })
})
