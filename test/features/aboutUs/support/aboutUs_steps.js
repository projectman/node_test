const { Given, When, Then, After } = require("@cucumber/cucumber");


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


After(function() {
  return this.driver.quit();
});
