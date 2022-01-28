const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber');
const { until, By } = require('selenium-webdriver');
const { titleContains } = require('selenium-webdriver/lib/until');
const { aboutUsTitle } = require('../../../data/aboutUs/aboutUsData');
const { DEFAULT_TIMEOUT, url, homeTitle } = require('../../../data/home/homePageData');
const homePageData = require('../../../data/home/homePageData');
const ChromeDriver = require('../../../utilities/chromeDriver');
const FirefoxDriver = require('../../../utilities/firefoxDriver');
const MobileDriver = require('../../../utilities/mobileDriver');
const { xpathLinkWith } = require('../../../utilities/utils');

setDefaultTimeout(DEFAULT_TIMEOUT);

class CustomWorld extends World {
    
    constructor(options) {
        super(options);
        this.driver = null; 
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
      return this.driver; 
    }

    /**
     * Open Home page of application and validate opening 
     * home page by waiting expected title. 
     */
    openHomePage() {
      console.log('Word: openHomePage');
      return this.driver.get(url);
    }

    clickLinkWithText(linkText) {
      const locator = xpathLinkWith(linkText);
      console.log('locator: ' + locator);
      return this.driver.wait(until.elementLocated(By.xpath(locator))).then(
        function(el) {
          
          return el.click()
        }
      );
   
    }
    
    // FIXME: not working !!!
    validateAboutUsPageTitle() {

      const expectedTitle = aboutUsTitle;
      return this.driver.wait(until.titleContains(expectedTitle));
    }
  

    closeDriver(){
      return this.driver.quit();
    }
}

setWorldConstructor(CustomWorld)