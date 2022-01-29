const { Given, When, Then, After } = require("@cucumber/cucumber");
const assert = require("assert");
const util = require('util');
const { elementLocated, elementIsSelected } = require("selenium-webdriver/lib/until");


Given("user choses browser {string}", function (chosenBrowser) {

    this.choseDriverFor(chosenBrowser);
  });


Given("user open Home Page", function () {
  // return this.openHomePage();
  console.log('AboutUs steps: Given Home page');
  this.openHomePage();

});

When('find link contains text {string} and click it', function (linkText) {
  return this.clickLinkWithText(linkText);

});

Then('on opened page Title will be as expected', function () {
  return this.validateAboutUsPageTitle();
});


Then('on opened page quantity of located Our Values elements equal {int}', 
function (expectedValuesQty) {
  const foundValuesQty = this.valueElementsAboutUs().then(function(foundElements) {
    assert.equal(foundElements.length, expectedValuesQty);})

  return foundValuesQty; 
});

Then('all expected values {string} present in',
function (expectedWords) {
  const expectedArray = expectedWords.split(', ')
  console.log('expected words: ' + expectedArray);
  var elements = this.valueElementsAboutUs().then(function(els) {
    console.log('get text:' + (els[0].getText()));
  });

  return elements; 
})


After(function() {
  return this.driver.quit();
});
