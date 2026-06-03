import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

import { portfolio } from "../../data/portfolio";

test("home page loads and navigates through section anchors", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Desktop navigation only.");

  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: portfolio.owner.name })
  ).toBeVisible();
  await page.getByRole("link", { name: "Skills" }).click();
  await expect(page.locator("#skills")).toBeInViewport();

  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page.locator("#projects")).toBeInViewport();

  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page.locator("#contact")).toBeInViewport();
});

test("external links use safe new-tab attributes", async ({ page }) => {
  await page.goto("/");

  const externalLinks = page.locator('a[target="_blank"]');
  const count = await externalLinks.count();

  expect(count).toBeGreaterThan(0);

  for (let index = 0; index < count; index += 1) {
    await expect(externalLinks.nth(index)).toHaveAttribute(
      "rel",
      /noopener noreferrer/
    );
  }
});

test("404 page is available for unknown routes", async ({ page }) => {
  await page.goto("/missing-page");

  await expect(page.getByText("Whoops! Lost in Space?")).toBeVisible();
  await expect(page.getByRole("link", { name: "Back to Home" })).toBeVisible();
});

test("home page has no detectable accessibility violations", async ({
  page,
}) => {
  await page.goto("/");

  const accessibilityScanResults = await new AxeBuilder({
    page: page as never,
  }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test("home page does not overflow horizontally", async ({ page }) => {
  await page.goto("/");

  const hasHorizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });

  expect(hasHorizontalOverflow).toBe(false);
});
