const { Given, When, Then, After } = require("@cucumber/cucumber");


// TODO: make as argument type of browser chrome/firefox
Given("user choses browser chrome", function () {
    console.log("from HomePage.js:Given");
    this.createDriver('chrome')
  });


Given("user open Home Page", function () {
    this.openHomePage();
    
});
  
Then("found expected Home Page title", function () {
    this.validateTitleHome()
    
});

When('find link contains text "About Us" and click it', function () {
  console.log('found link contains text');
  
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