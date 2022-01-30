const { Given, When, Then, After, Status, AfterStep } = require("@cucumber/cucumber");
const assert = require("assert");
const utils = require('../../../utilities/utils.js');
const util = require('util');
const { default: TestCaseHookDefinition } = require("@cucumber/cucumber/lib/models/test_case_hook_definition");
const { default: TestStepHookDefinition } = require("@cucumber/cucumber/lib/models/test_step_hook_definition");

Given("user choses browser {string}", function (chosenBrowser) {
  console.log(`Launched scenario for browser: ${chosenBrowser}`);
  return this.selectDriverWith(chosenBrowser);
  });


Given("user open Home Page", function () {
  // return this.openHomePage();
  return this.openHomePage();

});

// Here used variant step definition with regex syntax
// NOTE: This step call universal method, it will recreate xpath 
// of <a> tag element that contains text as arriving from feature as 'linkText'
When(/^find link contains text "([^"]*)" and click it$/, function (linkText) {
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
    assert.equal(
      foundElements.length, 
      expectedValuesQty,
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


After(function(testCase) {

  // Test case failed - make screenshot, save it and quit driver
  if (testCase.result.status === Status.FAILED) {
    
    this.driver.takeScreenshot().then(function(screenShot) {
      utils.saveScreenshot(screenShot, testCase.pickle.name)
    });
    return this.driver.quit();
  } else {
    // No Failed - just quit the driver
    return this.driver.quit()
  }

});
