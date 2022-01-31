const { setWorldConstructor, World, setDefaultTimeout, Status } = require('@cucumber/cucumber');
const assert = require('assert');
const { until, By } = require('selenium-webdriver');
const aup = require('../../../data/aboutUs/aboutUsData');
const hp = require('../../../data/home/homePageData');
const capabilitiesFor = require('../../../utilities/browserCapabilities');
const selenium = require('selenium-webdriver');
const utils = require('../../../utilities/utils');
const Page = require('../../../utilities/page');
const util = require('util');

setDefaultTimeout(hp.DEFAULT_TIMEOUT);

class CustomWorld extends World {

  constructor(options) {
    super(options);
    this.driver = null; 
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

    console.log(`Chosen driver: ${browserName}`);

    this.driver = new selenium.Builder()
      .withCapabilities(capabilitiesFor[browserName]).build();

    this.driver.manage().window().maximize();
    // Initialize new Page class object with just created driver
    this.page = new Page(this.driver);

    return this.driver;
  };


  /**
   * Open Home page within data of homePage.js 
   * @return - {Promises} - of Selenium Web Driver
   */
  openHomePage() {
    console.log('Word: openHomePage');
    return this.driver.get(hp.url);
  };

  /**
   * Reuseable universal method. 
   * @param {string} linkText - plain text that should be located 
   * in link element on the page
   * @returns - {Promises} - of Selenium Web Driver
   */
  clickLinkWithText(linkText) {
    // prototype of reusable method for framework  
    let locator = this.page.xpathLinkWith(linkText)
    return this.page.locateAndClickElementByXpath(locator)
  };
    
  /**
   * Find on opened page expected title of About Us
   * Help to validate that opened right page
   * @returns - {Promise} - of new WebDriver
   */
  validateAboutUsPageTitle() {

    return this.page.waitUntilPageContains(aup.aboutUsTitle);
  };

  /**
   * find all Our Value elements of About Us page
   * @returns - {Promise} - Array of web elements as promise
   * icon "//img[@alt='checkmark icon']" included in span element with Our Value
   */
  allOurValueElements() {

    return this.page.waitElementsLocatedByXpath(aup.checkmarkSpan)
  };
}

setWorldConstructor(CustomWorld)