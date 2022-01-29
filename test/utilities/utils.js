const { until, By } = require('selenium-webdriver');


/**
 * Prototype of main helper class
 */
module.exports = {
  // TODO: move to helper module
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

  /**
   * Compare 2 received arrays, Arrays can be with string or numbers
   * but not objects
   * @param {Array[Union[number, string]]} array1 
   * @param {Array[Union[number, string]]} array2 
   * @returns {boolean} - True if arrays have the same members
   */
  arraysWithSameMemebers(array1, array2){

    // Validate length to protect comparing py item
    if(array1.length != array2.length) { console.log('false 1'); return false;  };

    // Make elements in the same order
    const arr1 = array1.concat().sort();
    const arr2 = array2.concat().sort(); 

    // compare every pair of elements with possible string format
    for (let index = 0; index < arr1.length; index++) {
      let element1 = arr1[index];
      let element2 = arr2[index];

      if (typeof element1 == 'string') {
        element1 = element1.toLocaleLowerCase()
      };
      if (typeof element2 == 'string') {
        element2 = element2.toLowerCase()
      };
      // DEBUG DELETE
      if (element1 !== element2) {
        console.log(`Not equal elements: ${element1} with ${element2}`);
        console.log('false from here:');
        return false
      };
    }

  // no unequal elements were found, result positive
  return true; 
  }

}