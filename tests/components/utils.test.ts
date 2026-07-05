import { describe, it, expect } from "vitest"
import { cn, formatPhoneNumber, truncate } from "@/lib/utils"

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2")
  })

  it("handles tailwind conflicts", () => {
    expect(cn("px-4", "px-6")).toBe("px-6")
  })

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "extra")).toBe("base extra")
  })
})

describe("formatPhoneNumber", () => {
  it("formats 9-digit Chilean number", () => {
    expect(formatPhoneNumber("912345678")).toBe("+56 9 1234 5678")
  })

  it("returns original for unknown formats", () => {
    expect(formatPhoneNumber("123")).toBe("123")
  })
})

describe("truncate", () => {
  it("truncates long strings", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...")
  })

  it("returns short strings unchanged", () => {
    expect(truncate("Hi", 5)).toBe("Hi")
  })
})
