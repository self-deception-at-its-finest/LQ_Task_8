import mainNavigationMenu from "../../pageobjects/mainNavigationMenu.component.ts"
import loginPage from "../../pageobjects/login.page.ts"
import {faker} from "@faker-js/faker";


describe('Login Functionality', () => {
    it('Login with invalid password',  async () => {
        await mainNavigationMenu.loginButton.click()

        await expect(loginPage.pageTitle).toBeDisplayed()
        await expect(loginPage.pageTitle).toHaveText('Login / Sign up Form')

        const mail = faker.internet.email()
        await loginPage.emailInput.setValue(mail)
        await expect(loginPage.emailInput).toHaveText(mail)

        const randomLength = faker.number.int({ min: 0, max: 7 })

        await loginPage.passwordInput.setValue(faker.internet.password({ length: randomLength }))

        await loginPage.loginButton.click()

        await expect(loginPage.invalidPasswordMessage).toBeDisplayed()
        await expect(loginPage.invalidPasswordMessage).toHaveText("Please enter at least 8 characters")

    })
})