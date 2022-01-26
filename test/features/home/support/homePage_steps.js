const { Given, When, Then, After } = require("@cucumber/cucumber");
const assert = require("assert").strict;

// TODO: make as argument type of browser chrome/firefox
Given("user choses browser chrome", function () {
    console.log("from HomePage.js:Given");

  });


When("user open Home Page", function () {
    this.openHomePage();
    
});
  
Then("found expected Home Page title", function () {
    this.validateTitleHome()
    this.closeDriver();
});

