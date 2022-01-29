const { until, By } = require('selenium-webdriver');


/**
 * Prototype of main helper class
 */
module.exports = {

    LOC_TIMEOUT: 1000,

    /**
     * 
     * @param linkText - {string}  - text that included in link element 'a'
     * @returns xpath {string} locator for the link type element with 
     * text containing received: var: linkText
     */
    xpathLinkWith(linkText) {
        return "//a[contains(text(), '" + linkText + "')]"
    },

    /**
     * Receive promise of webdriver wait until LOC_TIMEOUT time then 
     * click it and return new promise of webdriver. 
     * 
     * @param {Promise} driver Selenium Webdriver object 
     * @param {string} xpathLocator - will be open 
     * @returns {Promise} of current webdriver 
     */
    locateAndClickElementByXpath(driver, xpathLocator) {

        return driver.wait(
            until.elementLocated(By.xpath(xpathLocator)), this.LOC_TIMEOUT
            )
            .then(
          function(el) { return el.click() }
          )
    },

    matchTwoArrays(foundArray, expectedArray) {
        console.log('much 2 arrays');
        
    }

}