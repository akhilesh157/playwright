const {test,expect}=require('@playwright/test');

test("1-title_check",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    await page.waitForLoadState('load'); 

    await expect(page).toHaveTitle("Online Shop Demo – Demo Site")
})

test('url_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    const login_page=await page.getByRole('link', { name: 'Login' })
    await login_page.click()
    await page.waitForLoadState('load');
    await expect(page).toHaveURL('https://www.onlineshopdemo.co.uk/my-account/');
})

test('3-search_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    const search_icon= await page.locator(".elementor-icon")
    await expect(search_icon).toBeTruthy()
})

test('4-heading_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    await page.waitForLoadState('load');
    const heading1=await page.getByText('Demo eCommerce')
    await expect(heading1).toBeVisible()
})

test('5-sale-clicking',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/my-account/")
    await page.waitForLoadState('load');
    const sale_option= await page.locator(".jet-menu-title").filter({ hasText: 'Sale' }).click()
    await expect(page).toHaveURL("https://www.onlineshopdemo.co.uk/product-tag/sale/")
})
