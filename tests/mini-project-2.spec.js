const {test,expect}=require('@playwright/test');

test('6-hove-checking',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/my-account/")
    const hover_option= await page.locator(".jet-menu-title").nth(2);
    await hover_option.hover()
    await expect(hover_option).toBeVisible()
})


test('7-product-check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/")
    await page.waitForLoadState('load');
    await page.locator('.jet-woo-product-thumbs__inner').nth(0).click();
    await page.waitForLoadState('load');
    await page.locator('#pa_color').selectOption({index:1});
    await page.locator('#pa_size').click();
    await page.locator('#pa_size').selectOption({index:1});
    await page.getByRole('button', { name: 'Add to basket' }).click()
    await page.waitForLoadState('load');
    const confirmtext=page.getByText('“Cateye sunglasses” has been added to your basket.');
    await expect(confirmtext).toBeVisible();
})

test("8-cart_quantity",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product/cateye-sunglasses/")
    await page.waitForLoadState('load');
    await page.locator('#pa_color').selectOption({index:1});
    await page.locator('#pa_size').click();
    await page.locator('#pa_size').selectOption({index:1});
    await page.getByRole('button', { name: 'Add to basket' }).click()
    await page.waitForLoadState('load');
    const confirmtext=page.locator('text=“Cateye sunglasses” has been added to your basket."').isVisible()
    if (confirmtext){
        const cart_value=await page.locator(".jet-blocks-cart__count-val").textContent()
        await expect(Number(cart_value)).toBeGreaterThan(0);
    }
})

test("9-products_inStock",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/")
    await page.waitForLoadState('load');
    await page.locator("select[name='pa_feature']").selectOption({ index: 1 })
    await page.waitForTimeout(10000);
    await page.waitForLoadState('load');
    const no_product_message=page.locator(".woocommerce-info").textContent("No products were found matching your selection.")
    if (!no_product_message){
        test.skip()
    }
    else{
        await page.locator("select[name='pa_feature']").selectOption({ index: 3 })
        await expect(page).toBeTruthy
    }
})


test('10-rating_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/");
    await page.locator(".jet-rating-star__label").nth(4).click();
    await page.waitForLoadState('load');
    const no_product_rating=await page.getByText("No products were found matching your selection.")
    if (!no_product_rating){
        expect(page).toBeTruthy()
    }
})