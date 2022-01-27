var MainPage = require("../../../utilities/mainPage");
const { setWorldConstructor } = require("@cucumber/cucumber");
require('chromedriver');
const headerData = require("../../../data/home/headerData.json");
const aboutUsData = require("../../../data/aboutUs/aboutUsData.json");
var { until, By } = require('selenium-webdriver');


class AboutUsPage extends MainPage {
  /**
   * AboutUs Page class - interact with elements on "About Us" page
   */  

}

setWorldConstructor(AboutUsPage);