const {test,expect}=require('@playwright/test');

test("1-title_check",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    await expect(page).toHaveTitle("Online Shop Demo – Demo Site")
})