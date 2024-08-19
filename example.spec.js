/*const {test, expect}=require('@playwright/test');

test("checking",async({page})=>{
  await page.goto("https://www.google.com/search?q=olympics+2024&oq=olym&gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTINCAAQABiDARixAxiABDIMCAEQIxgnGIAEGIoFMgYIAhBFGDkyDQgDEAAYgwEYsQMYgAQyEAgEEAAYgwEYsQMYgAQYigUyDQgFEAAYgwEYsQMYgAQyEAgGEAAYgwEYsQMYgAQYigUyBggHEEUYPdIBCDQyNTdqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8");
  // await expect(page.getByLabel("Search")).toBeTruthy()
  // await expect(page).toHaveTitle(/olympics 2024/)
  await expect(page.getByRole("listitem",{name:"golf"})).toBeTruthy()
  
}
)
*/
const { test, expect } = require('@playwright/test');

test("hello", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await expect(page).toHaveTitle("YouTube");
  });