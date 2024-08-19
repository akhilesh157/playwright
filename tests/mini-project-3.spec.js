const {test,expect}=require('@playwright/test');

test('11-sliding_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/");
    const slider=await page.locator(".jet-range__slider__input.jet-range__slider__input--max");
    await slider.fill('50');
    expect(page).toBeTruthy()
})

test('12-placeholder_search',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/");
    await page.waitForLoadState('load');
    const searching=await page.getByPlaceholder("Type your request").fill("sunglasses")
    await page.waitForLoadState('load');
    const search_text=await page.getByText("No products were found matching your selection.")
    if (!search_text){
        expect(page).toBeTruthy()
    }
})

test('13-highlight check', async ({ page }) => {
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/");
    await page.waitForLoadState('load');
    const highlighting = await page.locator(".woocommerce-products-header__title.page-title").highlight();
    await expect(highlighting).toBeVisible
});


test('14-search_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    await page.waitForLoadState('load');
    const search_icon= await page.locator('div').getByRole('link').nth(2)
    await page.waitForLoadState('load');
    const search_edit_check=await page.getByPlaceholder("Search this store")
    await expect(search_edit_check).toBeEditable()
})

test("15-screenshot_check",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    await page.screenshot({ path: 'screenshot.png' });
})