// @ts-check
const { test, expect } = require('@playwright/test');

test('Login test', async ({ page }) => {

  await page.goto('https://app.todoist.com/auth/login');
  await page.locator("#element-0").fill("wl.interview.session@gmail.com");
  await page.locator("#element-3").fill("WL2021&*");
  await page.locator("[type='submit']");
  await page.pause();

  await page.waitForLoadState('networkidle');
  await expect (page.locator("[type='button']")).toBeVisible();
 
  //await expect(page).toHaveTitle(/Playwright/);
});

test.only('Login test failed', async ({ page }) => {

  await page.goto('https://app.todoist.com/auth/login');
  await page.locator("#element-0").fill("carlos@qwe.com");
  await page.locator("#element-3").fill("WL202145354");
  await page.locator("[type='submit']").click();
  await expect (page.locator('.a83bd4e0 _266d6623 _8f5b5f2b fb8d74bb')).toBeHidden();
  
 
  //await expect(page).toHaveTitle(/Playwright/);
});

//wl.interview.session@gmail.com / WL2021&*