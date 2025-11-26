import 'dotenv/config'


export const config = {
    runner: 'local',
    user: process.env.BS_USER,
    key: process.env.BS_KEY,
    protocol: 'https',
    hostname: 'hub.browserstack.com',
    port: 443,
    path: '/wd/hub',

    services: ['appium','browserstack'],
    specs: [
        '../test/specs/**/*.ts'
    ],

    exclude: [
    ],

    maxInstances: 1,

    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Google Pixel 6",
        "appium:automationName": "UiAutomator2",
        "appium:app": process.env.BS_APP_ID,
        "appium:noReset": true,
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": "com.wdiodemoapp.SplashActivity",
    }],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
