const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber');
const { until, By } = require('selenium-webdriver');
const { aboutUsTitle } = require('../../../data/aboutUs/aboutUsData');
const hp = require('../../../data/home/homePageData');

const ChromeDriver = require('../../../utilities/chromeDriver');
const FirefoxDriver = require('../../../utilities/firefoxDriver');
const MobileDriver = require('../../../utilities/mobileDriver');
const utils = require('../../../utilities/utils');

setDefaultTimeout(hp.DEFAULT_TIMEOUT);

class CustomWorld extends World {
    
    constructor(options) {
        super(options);
        this.driver = null; 
    }

    
    /**
     * Selector of driver an it's constrictor
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
      return this.driver; 
    }

    /**
     * Open Home page of application and validate opening 
     * home page by waiting expected title. 
     */
    openHomePage() {
      console.log('Word: openHomePage');
      return this.driver.get(hp.url);
    }

    /**
     * Reuseable universal method. 
     * @param {string} linkText - plain text that should be located 
     * in link element on the page
     * @returns 
     */
    clickLinkWithText(linkText) {
      // prototype of reusable method for framework  
      return utils.locateAndClickElementByXpath(
        this.driver, 
        utils.xpathLinkWith(linkText)
        )
    };
    
    // DEBUG: delete? 
    validateAboutUsPageTitle() {

      const expectedTitle = aboutUsTitle;
      return this.driver.wait(until.titleContains(expectedTitle), utils.loc_timeout);
    }
  
}

setWorldConstructor(CustomWorld)