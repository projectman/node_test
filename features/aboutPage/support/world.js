const { setWorldConstructor } = require("@cucumber/cucumber");
const homePage = require("../../homePage/support/homePageData.json")

// setWorldConstractor update cucumber with user's words for reuse
class CustomWorld {
  constructor() {
    this.homePage = homePage.url;
    console.log('this homePage: ' + this.homePage);
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);