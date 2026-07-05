import { test, expect } from "@playwright/test"

test.describe("Landing Page", () => {
  test("has title", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Padel Zenter/)
  })

  test("hero section is visible", async ({ page }) => {
    await page.goto("/")
    const hero = page.locator("#hero")
    await expect(hero).toBeVisible()
  })

  test("navbar is present", async ({ page }) => {
    await page.goto("/")
    const nav = page.locator('nav[aria-label="Navegación principal"]')
    await expect(nav).toBeVisible()
  })

  test("footer is present", async ({ page }) => {
    await page.goto("/")
    const footer = page.locator("footer")
    await expect(footer).toBeVisible()
  })

  test("all sections are present", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#about")).toBeVisible()
    await expect(page.locator("#facilities")).toBeVisible()
    await expect(page.locator("#services")).toBeVisible()
    await expect(page.locator("#gallery")).toBeVisible()
    await expect(page.locator("#tournaments")).toBeVisible()
    await expect(page.locator("#reviews")).toBeVisible()
    await expect(page.locator("#contact")).toBeVisible()
  })

  test("reserve button links to booking URL", async ({ page }) => {
    await page.goto("/")
    const reserveLinks = page.getByRole("link", { name: /reservar/i })
    await expect(reserveLinks.first()).toBeVisible()
  })

  test("mobile menu opens and closes", async ({ page }) => {
    await page.goto("/")
    await page.setViewportSize({ width: 375, height: 812 })
    const menuButton = page.getByRole("button", { name: /abrir menú/i })
    await expect(menuButton).toBeVisible()
    await menuButton.click()
    const closeButton = page.getByRole("button", { name: /cerrar menú/i })
    await expect(closeButton).toBeVisible()
    await closeButton.click()
    await expect(closeButton).not.toBeVisible()
  })
})
