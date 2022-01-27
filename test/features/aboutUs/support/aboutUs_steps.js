const { Given, When, Then, After } = require("@cucumber/cucumber");
var { until, By } = require('selenium-webdriver');


// TODO: make as argument type of browser chrome/firefox
Given("user choses browser chrome", function () {
    console.log("from HomePage.js:Given");
    this.createDriver('chrome')
  });


Given("user open Home Page", function () {
  return this.openHomePage();
    
    
});
  
Then("found expected Home Page title", function () {
    return this.validateTitleHome()
    
});

When('find link contains text {string} and click it', function (textInside) {
  console.log('found link contains text: ' + textInside);
  // return this.waitLocatedClick(textInside)
  const xpathLoc = "//div[@class='container']//a[contains(text(), 'About Us')]";
  return this.driver.wait(until.elementLocated(By.xpath(xpathLoc)), 20000);
});

Then('on opened page quantity of located Our Values elements eqal {int}', function (quantity) {
  console.log('quantity expected: ' + quantity);
  
});

Then('all expected values "Accountable, Realiable, Ethical" present in', function () {
  console.log('3 words vaidation');
  
});


After(function() {
    // console.log('instead of close driver');
    this.closeDriver();
  })