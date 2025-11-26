class LoginPage  {
    get emailInput() { return $('~input-email') }
    get passwordInput() { return $('~input-password') }
    get loginButton() { return $('~button-LOGIN') }
    get pageTitle() { return $('android=new UiSelector().text("Login / Sign up Form")') }
    get successfulLoginMessage() { return $('android=new UiSelector().text("You are logged in!")') }
    get invalidEmailMessage() { return $('android=new UiSelector().text("Please enter a valid email address")') }
    get invalidPasswordMessage() { return $('android=new UiSelector().text("Please enter at least 8 characters")') }


}
export default new LoginPage()