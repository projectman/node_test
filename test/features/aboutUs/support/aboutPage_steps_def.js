const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;

Given("user on opened Home Page", function () {
  console.log(
    "from Given: "
  );
  this.openHomePage()
  this.closeDriver()
});

When("I increment the variable by {int}", function (number) {
  this.incrementBy(number);
});

Then("the variable should contain {int}", function (number) {
  assert.equal(this.variable, number);
});