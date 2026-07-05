import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Card, CardHeader } from "@/components/ui/card"

describe("Card", () => {
  it("renders children correctly", () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText("Card content")).toBeInTheDocument()
  })

  it("applies hover class when hover prop is true", () => {
    const { container } = render(<Card hover>Hover card</Card>)
    expect(container.firstChild).toHaveClass("hover:shadow-md")
  })

  it("applies glass class when glass prop is true", () => {
    const { container } = render(<Card glass>Glass card</Card>)
    expect(container.firstChild).toHaveClass("glass")
  })

  it("renders CardHeader with title and description", () => {
    render(
      <Card>
        <CardHeader title="Test Title" description="Test description" />
      </Card>
    )
    expect(screen.getByText("Test Title")).toBeInTheDocument()
    expect(screen.getByText("Test description")).toBeInTheDocument()
  })
})
