require('chromedriver')
const homePageData = require("../data/home/elements.json")
var { Builder } = require('selenium-webdriver')

class MainPage {
    // Main page class - super class for the every page steps class, 
    // It keeps all re-usable methods of these steps page classes: 
    // general methods for some step page classes and Home page step classes. 

    constructor(){
        console.log('Write log: main page');
    }

    openHomePage() {
        /*
         *  Open home page URL with browser arriving as arguemnt
         */
        console.log('open browser and get homepage url: ' + homePageData.url);
        this.driver.get(homePageData.url);
    }

    createDriver(browser) {
        /*
         * create web driver object dependent of arrived name of:
         * browser: string, name of browser: 'chrome' or 'firefox'
         */
        this.driver = new Builder().forBrowser(browser).build();
    }

    closeDriver() {
        /*
        *  Clossing current web driver session. 
        */
        this.driver.quit()
    }
}

module.exports = MainPage; 