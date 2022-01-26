const { setWorldConstructor } = require("@cucumber/cucumber");
require('chromedriver')
const homePageData = require("../../../data/home/elements.json")
var { Builder, until } = require('selenium-webdriver')

// Home page class: interact with web elements of home page
// TODO: separate main class from this class
class HomePage {
  constructor() {
    /*
      homePage - webdriver object with opened Home page 
      browser: string, name of browser: 'chrome' or 'firefox'
    */
    this.driver = new Builder().forBrowser('chrome').build();
   
  }

  openHomePage() {
    /*
      Open home page URL with browser arriving as arguemnt
    */
  
    console.log('open browser and get homepage url');
    this.driver.get(homePageData.url);
  }

  validateTitleHome() { 
    /*
      Get title of opened Home page and compare with expected Home Page title.
    */
    
    this.driver.wait(until.titleIs(homePageData.title), 5000)
  }

  // TODO: move in Suite TearDown
  closeDriver() {
    /*
      Clossing current web driver session. 
    */
    this.driver.quit()
  }
}

setWorldConstructor(HomePage);