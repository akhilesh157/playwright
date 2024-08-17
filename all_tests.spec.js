const {test,expect}=require('@playwright/test');

// test('Login_page',async({page})=>{
//     test.slow()
//     await page.goto("https://www.onlineshopdemo.co.uk/");
//     const login_page=await page.getByRole('link', { name: 'Login' })
//     await login_page.click()
//     await page.getByText('Registered').click()
//     await page.getByText('Registered').click()
//     const randomNumber = Math.floor(Math.random() * 1000000);
//     const email = `user${randomNumber}@gmail.com.com`;  
//     await page.locator('#reg_email').fill(email);
//     await page.getByRole('button', { name: 'Register' }).click()
//     const welcome_text_locator = page.locator(".elementor-heading-title.elementor-size-default",{name:"Dashboard"});
//     await expect(welcome_text_locator).toHaveText(/Hello/);
// })

test("1-title_check",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    await expect(page).toHaveTitle("Online Shop Demo – Demo Site")
})

test('2-url_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    const login_page=await page.getByRole('link', { name: 'Login' })
    await login_page.click()
    await expect(page).toHaveURL('https://www.onlineshopdemo.co.uk/my-account/');
})

test('3-search_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    const search_icon= await page.locator(".elementor-icon")
    await expect(search_icon).toBeTruthy()
})

test('4-heading_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    const heading1=await page.getByText('Demo eCommerce')
    await expect(heading1).toBeVisible()
})

test('5-sale-clicking',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/my-account/")
    const sale_option= await page.locator(".jet-menu-title").filter({ hasText: 'Sale' }).click()
    await expect(page).toHaveURL("https://www.onlineshopdemo.co.uk/product-tag/sale/")
})

test('6-hove-checking',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/my-account/")
    const hover_option= await page.locator(".jet-menu-title").nth(2);
    await hover_option.hover()
    await expect(hover_option).toBeVisible()
})


test('7-product-check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/")
    await page.locator('.jet-woo-product-thumbs__inner').nth(0).click();
    await page.locator('#pa_color').selectOption({index:1});
    await page.locator('#pa_size').click();
    await page.locator('#pa_size').selectOption({index:1});
    await page.getByRole('button', { name: 'Add to basket' }).click()
    const confirmtext=page.getByText('“Cateye sunglasses” has been added to your basket.');
    await expect(confirmtext).toBeVisible();
})

test("8-cart_quantity",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product/cateye-sunglasses/")
    await page.locator('#pa_color').selectOption({index:1});
    await page.locator('#pa_size').click();
    await page.locator('#pa_size').selectOption({index:1});
    await page.getByRole('button', { name: 'Add to basket' }).click()
    const confirmtext=page.locator('text=“Cateye sunglasses” has been added to your basket."').isVisible()
    if (confirmtext){
        const cart_value=await page.locator(".jet-blocks-cart__count-val").textContent()
        await expect(Number(cart_value)).toBeGreaterThan(0);
    }
})

test("9-products_inStock",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/")
    await page.locator("select[name='pa_feature']").selectOption({ index: 1 })
    await page.waitForTimeout(10000);
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
    const no_product_rating=await page.getByText("No products were found matching your selection.")
    if (!no_product_rating){
        expect(page).toBeTruthy()
    }
})

test('11-sliding_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/");
    const slider=await page.locator(".jet-range__slider__input.jet-range__slider__input--max");
    await slider.fill('50');
    expect(page).toBeTruthy()
})

test('12-placeholder_search',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/");
    const searching=await page.getByPlaceholder("Type your request").fill("sunglasses")
    const search_text=await page.getByText("No products were found matching your selection.")
    if (!search_text){
        expect(page).toBeTruthy()
    }
})

test('13-highlight check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product-tag/sale/");
    const highlighting= await page.locator(".woocommerce-products-header__title page-title").highlight()
    await expect(highlighting).toBeVisible
})

test('14-search_check',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    const search_icon= await page.locator('div').getByRole('link').nth(2)
    const search_edit_check=await page.getByPlaceholder("Search this store")
    await expect(search_edit_check).toBeEditable()
})

test("15-screenshot_check",async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/");
    await page.screenshot({ path: 'screenshot.png' });
})