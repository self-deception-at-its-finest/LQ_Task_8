import mainNavigationMenu from "../../pageobjects/mainNavigationMenu.component.ts"
import loginPage from "../../pageobjects/login.page.ts"
import {faker} from "@faker-js/faker";


describe('Login Functionality', () => {
    it('Login with invalid email',  async () => {
        await mainNavigationMenu.loginButton.click()

        await expect(loginPage.pageTitle).toBeDisplayed()
        await expect(loginPage.pageTitle).toHaveText('Login / Sign up Form')

        const fakeMail = faker.internet.username() + 'example.com'
        await loginPage.emailInput.setValue(fakeMail)

        await expect(loginPage.emailInput).toHaveText(fakeMail)

        await loginPage.passwordInput.setValue(faker.internet.password())

        await loginPage.loginButton.click()

        await expect(loginPage.invalidEmailMessage).toBeDisplayed()
        await expect(loginPage.invalidEmailMessage).toHaveText("Please enter a valid email address")

    })
})