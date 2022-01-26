const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

Given("a variable set to {int}", function (number) {
  console.log(
    "from Given this.homePage: " + this.homePage
  );;
});

When("I increment the variable by {int}", function (number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function (number) {
  assert.equal(this.variable, number);
});