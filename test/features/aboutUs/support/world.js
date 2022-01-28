const { setWorldConstructor, World } = require('@cucumber/cucumber');
const ChromeDriver = require('../../../utilities/chromeDriver');
const FirefoxDriver = require('../../../utilities/firefoxDriver');
const MobileDriver = require('../../../utilities/mobileDriver');

class CustomWorld extends World {
    

    constructor(options) {
        super(options)
    }


    /**
     * Selector of driver an it's constractor
     * @param {string} browser - name from list: 'firefox', 'mobile'
     * by default in all other cases will be chosen: chrome
     * 
     * @returns {ThenableWebDriver} selenium web driver
     */
     choseDriverFor(browser) {

      var DriverChoice = ChromeDriver;
      if(browser == 'firefox'){
        DriverChoice = FirefoxDriver

      } else if (browser == 'mobile') {
        DriverChoice = MobileDriver
      };

      this.driver = new DriverChoice();
    }
}

setWorldConstructor(CustomWorld)