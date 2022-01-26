const HomePage = require("../../../pages/home/homePage");
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

// TODO: make as argument type of browser chrome/firefox
Given("user choses browser chrome", function () {
    console.log("from Given homePage");
    var driver = new HomePage('chrome');
    driver.openHomePage('chrome');
    
  });


When("user open Home Page", function () {
    console.log("When user open Home Page")
    
});
  
Then("found expected Home Page title", function () {
    console.log('then found expected Home Page title');
    driver.validateTitleHome()
    driver.closeDriver();
});

