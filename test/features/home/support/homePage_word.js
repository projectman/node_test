var MainPage = require("../../../utilities/mainPage");
const { setWorldConstructor } = require("@cucumber/cucumber");
// TODO: do I need this require "chromedriver" ? 
require('chromedriver');
const homePageData = require("../../../data/home/homePageData.json");
const headerData = require("../../../data/home/headerData.json");
var { until, By } = require('selenium-webdriver');

class HomePage extends MainPage {
  /*
  * Home page class: interact with web elements of
  * home page
  */

  validateTitleHome() { 
    /*
     * Get title of opened Home page and compare with expected Home Page 
     * title.
     */
    
    this.driver.wait(until.titleIs(homePageData.title), 5000)
  }

  clickAboutUsLink() { 
    /*
     * Find link element "About Us" in menu header and click it. 
     */
    console.log('clickAboutUsLink()');
    this.driver.wait(until.elementLocated(
      By.xpath(headerData.aboutUs), 5000
      )).click();
  }

}

setWorldConstructor(HomePage);