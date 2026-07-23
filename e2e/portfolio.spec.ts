import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Tests', () => {
  test('should load home page and render hero section', async ({ page }) => {
    await page.goto('/');

    // Check main content container exists
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeVisible();

    // Check hero section text
    await expect(page.locator('section#top')).toContainText('Jay');
  });

  test('should display navigation bar', async ({ page }) => {
    await page.goto('/');

    // Check header/nav element exists
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });

  test('should display contact section', async ({ page }) => {
    await page.goto('/');

    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });
});
