const {test,expect}=require('@playwright/test');
test("videocheck",async({page})=> {
    await page.goto("https://www.youtube.com/");
    const firstVideo=page.locator("heading").first();
    await firstVideo.click();
    await page.waitForTimeout(3000);
    const isPlaying=await page.evaluate(()=>{
        const video=document.querySelector('video');
        return video.paused === false && video.ended === false;
        });
        expect(isPlaying).toBeTruthy();
});