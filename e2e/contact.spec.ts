import { test, expect } from '@playwright/test';

test.describe('Contact Form XPath E2E Tests', () => {
  test('should fill and submit contact form using XPath locators', async ({ page }) => {
    await page.goto('/');

    // Scroll contact section into view
    await page.locator("//section[@id='contact']").scrollIntoViewIfNeeded();

    // Fill the contact form using XPath locators
    await page.locator("//input[@name='name']").fill("John Doe");
    await page.locator("//input[@name='email']").fill("john.doe@example.com");
    await page.locator("//textarea[@name='message']").fill("Hello! I would like to discuss a project role or dataset.");

    // Submit the form using XPath locator
    await page.locator("//button[@type='submit']").click();
  });
});
