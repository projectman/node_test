const { setWorldConstructor } = require("@cucumber/cucumber");
require('chromedriver')
const homePageData = require("../../data/home/elements.json")
var { Builder, By, until } = require('selenium-webdriver')

// Home page class: interact with web elements of home page
// TODO: separate main class from this class
class HomePage {
  constructor(browser) {
    /*
      homePage - webdriver object with opened Home page 
      browser: string, name of browser: 'chrome' or 'firefox'
    */
    this.driver = new Builder().forBrowser(browser).build();
   
  }

  openHomePage(browser) {
    /*
      Open home page URL with browser arriving as arguemnt
    */
  
    console.log('open browser and get homepage url');
    this.driver.get(homePageData.url);
  }

  validateTitleHome() {    
    console.log('Home Title to wait: ' + homePageData.title);
    this.driver.wait(until.titleIs(homePageData.title), 5000)
  }
  // TODO: move in Suite TearDown
  closeDriver() {
    this.driver.quit()
  }
}

module.exports = HomePage;