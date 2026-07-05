import { describe, it, expect, vi, beforeEach } from "vitest"
import { renderHook } from "@testing-library/react"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useInView } from "@/hooks/use-in-view"

describe("useScrollPosition", () => {
  it("returns false initially", () => {
    const { result } = renderHook(() => useScrollPosition(50))
    expect(result.current).toBe(false)
  })
})

describe("useMediaQuery", () => {
  beforeEach(() => {
    vi.stubGlobal("matchMedia", vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })))
  })

  it("returns boolean", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"))
    expect(typeof result.current).toBe("boolean")
  })
})

describe("useInView", () => {
  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    })))
  })

  it("returns ref and false initially", () => {
    const { result } = renderHook(() => useInView())
    const [ref, inView] = result.current
    expect(ref).toBeDefined()
    expect(typeof inView).toBe("boolean")
    expect(inView).toBe(false)
  })
})
