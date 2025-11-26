class  FormsPage {
    get inputField() { return $('~text-input') }
    get inputFieldResult() { return $('~input-text-result') }
    get switch() { return $('~switch') }
    get dropdown() { return $('~Dropdown') }
    get buttonActive() { return $('~button-Active') }
    get dropdownOption_1() { return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]') }
    get buttonActiveAlertTitle() { return $('id=android:id/alertTitle') }
}
export default new FormsPage()