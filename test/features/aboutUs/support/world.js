const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber');
const assert = require('assert');
const { until, By } = require('selenium-webdriver');
const aup = require('../../../data/aboutUs/aboutUsData');
const hp = require('../../../data/home/homePageData');
const capabilitiesFor = require('../../../utilities/browserCapabilities')
const selenium = require('selenium-webdriver');
const utils = require('../../../utilities/utils');

setDefaultTimeout(hp.DEFAULT_TIMEOUT);

class CustomWorld extends World {
    
  constructor(options) {
      super(options);
      this.driver = null; 
      this.foundElements = []; 
  }

  /**
   * Select right capabilities with 'browser' - arrived argument
   * @param {string} - browserName - name of browser 
   * from list of keys of browserCapabilities object 
   * @returns {ThenableWebDriver} selenium web driver object
   */
  selectDriverWith(browserName) {

    // Validate browser in the list of keys of browserCapabilities
    assert(
      browserName in capabilitiesFor,
      `Received browserName: ${browserName} must be from keys of 
      capabilitiesFor object: ${Object.keys(capabilitiesFor)}`
    )
    console.log(`chosen driver: ${browserName}`);
    this.driver = new selenium.Builder()
    .withCapabilities(capabilitiesFor[browserName]).build();

    this.driver.manage().window().maximize();

    return this.driver;
  };


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
    
    /**
     * Find on opened page expected title of About Us
     * Help to validate that opened right page
     * @returns - {Promise} - of new WebDriver
     */
    validateAboutUsPageTitle() {

      const expectedTitle = aup.aboutUsTitle;
      return this.driver.wait(until.titleContains(expectedTitle), utils.loc_timeout);
    }

    /**
     * find all Our Value elements of About Us page
     * @returns - {Promise} - Array of web elements as promise
     * icon "//img[@alt='checkmark icon']" included in span element with Our Value
     */
    allOurValueElements() {

      return this.driver.wait(
        until.elementsLocated(By.xpath(aup.checkmarkSpan)), 
        utils.LOC_TIMEOUT
        )

    }

}

setWorldConstructor(CustomWorld)