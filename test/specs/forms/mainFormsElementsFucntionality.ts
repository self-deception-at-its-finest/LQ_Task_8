import mainNavigationMenu from "../../pageobjects/mainNavigationMenu.component.ts"
import formsPage from "../../pageobjects/forms.page.ts"
import {faker} from "@faker-js/faker";


describe('Form', () => {
    it('Verify functionality of main form elements(input, switch, dropdown, button)',  async () => {
        await mainNavigationMenu.formsButton.click()

        const word = faker.lorem.word()
        await formsPage.inputField.setValue(word)
        await expect(formsPage.inputField).toHaveText(word)

        await formsPage.switch.click()
        await expect(formsPage.switch).toHaveAttr("checked", "true")

        await formsPage.dropdown.click()
        await formsPage.dropdownOption_1.click()

        await formsPage.buttonActive.click()
        await expect(formsPage.buttonActiveAlertTitle).toBeDisplayed()
        await expect(formsPage.buttonActiveAlertTitle).toHaveText("This button is")
    })
})