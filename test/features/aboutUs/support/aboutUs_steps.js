const { Given, When, Then, After } = require("@cucumber/cucumber");


Given("user choses browser {string}", function (chosenBrowser) {

    this.choseDriverFor(chosenBrowser);
  });


Given("user open Home Page", function () {
  // return this.openHomePage();
  console.log('AboutUs steps: Given Home page');
    
});
