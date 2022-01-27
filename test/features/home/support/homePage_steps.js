const { Given, When, Then, After } = require("@cucumber/cucumber");


// TODO: make as argument type of browser chrome/firefox
Given("user choses browser chrome", function () {
    console.log("from HomePage.js:Given");
    this.createDriver('chrome')
  });


When("user open Home Page", function () {
    this.openHomePage();
    
});
  
Then("found expected Home Page title", function () {
    this.validateTitleHome()
    
});


After(function() {
    // console.log('instead of close driver');
    this.closeDriver();
  })