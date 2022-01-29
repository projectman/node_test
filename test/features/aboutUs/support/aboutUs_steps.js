const { Given, When, Then, After } = require("@cucumber/cucumber");
const assert = require("assert");
const utils = require('../../../utilities/utils.js')
const { elementLocated, elementIsSelected } = require("selenium-webdriver/lib/until");


Given("user choses browser {string}", function (chosenBrowser) {
  console.log(`Launched scenario for browser: ${chosenBrowser}`);
  return this.selectDriverWith(chosenBrowser);
  });


Given("user open Home Page", function () {
  // return this.openHomePage();
  return this.openHomePage();

});


When('find link contains text {string} and click it', function (linkText) {
  return this.clickLinkWithText(linkText);

});


Then('on opened page Title will be as expected', function () {
  return this.validateAboutUsPageTitle();
});


Then('on opened page quantity of located Our Values elements equal {int}', 
function (expectedValuesQty) {
  return this.allOurValueElements()
  
  .then(function(foundElements) {
      
      // Validate the number of found element equal to expected value of elements
      assert(
        foundElements.length === expectedValuesQty,
        `Found quantity of elements: ${foundElements.length} is not equal to expected: ${expectedValuesQty}`
      );
  })
});


Then('all expected values {string} present in', 
function (allExpectedAsString) {

  // Convert received string of words in array of strings
  const expectedWords = allExpectedAsString.split(', ')

  let foundWords = []; 
  const foundElements = this.allOurValueElements()
  
  .then(function(elements) {
    elements.forEach(
      // Get innerText attribute where name of value can be gotten
        function(element) {element.getAttribute('innerText')

  // add to list of words - found word without side spaces that
  // may be used for locating in html
  .then(function(text) {foundWords.push(text);
            return foundWords;
  }) })
    return foundWords;
  })

.then(function(foundWords) {
  // validate the list of found words has the same members as expectedWords
  return utils.arraysWithSameMemebers(foundWords, expectedWords);
})
  .then(function(validationResult) {
    assert(
      validationResult,
      `found words ${foundWords} not match expected words: ${expectedWords}`
    )
  });
  
  return foundElements;
});


After(function() {
  return this.driver.quit();
});
