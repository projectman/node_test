const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

// TODO: make as argument type of browser chrome/firefox
Given("user choses browser chrome", function () {
    console.log("from Given homePage");
    
  });


When("user open Home Page", function () {
    console.log("When user open Home Page")
    this.openHomePage();
    
});
  
Then("found expected Home Page title", function () {
    console.log('then found expected Home Page title');
    this.validateTitleHome()
    this.closeDriver();
});

