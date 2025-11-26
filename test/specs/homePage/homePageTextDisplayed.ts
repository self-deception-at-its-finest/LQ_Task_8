import homePage from "../../pageobjects/home.page.ts"


describe('Start screen', () => {
    it('Verify logo displaying and text', async () => {
        await expect(homePage.webdriverLogo).toBeDisplayed()
        await expect(homePage.appDesc).toHaveText('Demo app for the appium-boilerplate')
    })
})