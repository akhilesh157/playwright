const {test,expect}=require('@playwright/test');

test('Aamzon cart',async({page})=>{
    await page.goto("https://www.onlineshopdemo.co.uk/product/overshirt-with-print/");
    await page.locator('#pa_color').click();
    await page.locator('#pa_color').selectOption({index:1});
    await page.locator('#pa_size').click();
    await page.locator('#pa_size').selectOption({index:1});
    await page.getByRole('button', { name: 'Add to basket' }).click;
    await page.waitForTimeout(10000);
    
    const confirmtext=page.getByRole('link',{name:'"Overshirt with print” has been added to your basket.'});
    await expect(confirmtext).toBeVisible;
});