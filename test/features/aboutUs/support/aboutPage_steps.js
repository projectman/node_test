const { Given, When, Then, After} = require("@cucumber/cucumber");


When("user click link with text About Us", function () {

  console.log('Wait and click link with href:');
  console.log('this: ' + this)
  this.clickAboutUsLink();
});

Then("opened page inludes 3 Values elements", function () {
  console.log('aboutUs word: Then');
  
});

// TODO: add one more Then for "And Names of Values includes..."
