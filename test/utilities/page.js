const { until, By } = require('selenium-webdriver');

/**
 * This class includes universal methods of interaction all 
 * unique pages with Selenium WD. 
 * @param driver - Webdriver object
 */
class Page {

  LOC_TIMEOUT = 1000;

  constructor(driver){
    this.driver = driver
  }

  /**
   * @param linkText - {string}  - text that included in link element 'a'
   * @returns xpath {string} locator for the link type element with 
   * text containing received: var: linkText
   */
  xpathLinkWith(linkText) {
      return "//a[contains(text(), '" + linkText + "')]"
  }

  /**
   * Receive promise of webdriver wait until LOC_TIMEOUT time then 
   * click it and return new promise of webdriver. 
   * 
   * @param {string} xpathLocator - will be open 
   * @returns {Promise} of current webdriver 
   */
  locateAndClickElementByXpath(xpathLocator) {
    
    return this.driver.wait(
        until.elementLocated(By.xpath(xpathLocator)), this.LOC_TIMEOUT
        )
        .then(
      function(el) { return el.click() }
      )
  }

  /**
   * 
   * @param {string} expectedTitle 
   * @returns - {Promises} - with object of Web driver
   */
  waitUntilPageContains(expectedTitle){
    return this.driver.wait(until.titleContains(expectedTitle), this.LOC_TIMEOUT);
  }

  /**
   * 
   * @param {string} locatorXpath
   * @returns {Promise} - Selenium Web Driver object
   */
  waitElementsLocatedByXpath(locatorXpath) {
    return this.driver.wait(
      until.elementsLocated(By.xpath(locatorXpath, this.LOC_TIMEOUT))
    )
  }

}

module.exports = Page; 