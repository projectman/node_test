var MainPage = require("../../../utilities/mainPage");
const { setWorldConstructor } = require("@cucumber/cucumber");
// TODO: do I need this require "chromedriver" ? 
require('chromedriver');
const homePageData = require("../../../data/home/homePageData.json");
const headerData = require("../../../data/home/headerData.json");
const aboutUsData = require("../../../data/aboutUs/aboutUsData.json")
var { until, By } = require('selenium-webdriver');

class AboutUsPage extends MainPage {
  /*
  * Home page class: interact with web elements of
  * home page
  */

  validateTitleHome() { 
    /*
     * Get title of opened Home page and compare with expected Home Page 
     * title.
     */
    
    return this.driver.wait(until.titleIs(homePageData.title), 5000)
  }

  waitLocatedClick(textInside) {
    console.log('will waitLocatedClick: ' + textInside);
    const xpathLoc = "//div[@class='container']//a[contains(text(), 'About Us')]";
    return this.driver.wait(until.elementLocated(By.xpath(xpathLoc)), 20000);
    // this.driver.wait(until.titleIs(aboutUsData.title), 10000)
  }

}

setWorldConstructor(AboutUsPage);