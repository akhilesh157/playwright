// @ts-check
/*const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toBeTruthy;
});


/*
test("yt-video",async({page})=>{
  await page.goto("https://www.youtube.com/");
  await page.getByPlaceholder("Search").fill('playwright');
  await page.locator("#search-icon-legacy").click();
  await page.locator('#content').first().click();
  expect(page).toBeTruthy();
});

//
/*test("mocks a fruit and doesn't call api", async ({ page }) => {
  // Mock the api call before navigating
  await page.route('api/v1/fruits', async route => {
    const json = [{ name: 'Strawberry', id: 21 }];
    await route.fulfill({ json });
  });
  // Go to the page
  await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the Strawberry fruit is visible
  await expect(page.getByText('Strawberry')).toBeVisible();
});

*/
  // T&C
  // checkbox
  // await page.getByLabel("I agree to the terms & conditions").check()
 
  // radio btn
  // await expect(page.getByLabel("I agree to the terms & conditions")).toBeChecked()
 
  //'*/**/api/v1/fruits'


// import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }, testInfo) => {
//   testInfo.setTimeout(testInfo.timeout + 30000); // Extend the test timeout by 30 seconds.
// });

// test('example test', async ({ page }) => {
//   await page.goto('https://wipro.techademy.com/login');
//   await expect(page.locator('text=Forgot Password')).toBeVisible({ timeout: 30000 }); // Expect timeout of 10 seconds.
// });

// @ts-check

const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/.*playwright/i);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



// filtering the locators (drill inside the DOM)
// test('filtering', async ({page}) => {
//   await page.goto("");
//   await page.getByRole("listitem")
//     .filter({ hasText: 'Product 2' })
//     .getByRole('button', {name: "Add to cart"})
//     .click()
// });
// test('stock items 5', async ({page}) => {
//   await page.goto("");
//   await expect(page.getByRole("listitem")
//     .filter({ hasNotText: 'Out of stock' }))
//     .toHaveCount(5)
// })