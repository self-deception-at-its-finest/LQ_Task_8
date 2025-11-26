class HomePage  {
    get webdriverLogo () {return $(`//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]`);}
    get appDesc () {return $(`//android.widget.TextView[@text="Demo app for the appium-boilerplate"]`);}

}
export default new HomePage()