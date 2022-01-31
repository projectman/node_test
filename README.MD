This is prototype of JavaScript browser automation framework using official [selenium-webdriver](http://seleniumhq.github.io/selenium/docs/api/javascript/ "view webdriver js documentation") and [cucumber-js](https://github.com/cucumber/cucumber-js "view cucumber js documentation").



## Launch the script, run from root directory: 

```bash
npm test
```
it will use only features in aboutUs folder only. 

## General description of framework:
Framework includes main folders: 
- features, where all features for current pages includes in separate folders with own's page name. 
    - Every individual folder by page name will include: feature file and support folder with step definitions file and word file that add initialize feature file.'
- data, folders separated by page name with page elements locators data, to avoid disturbing the code of pages. 
- utilities, folder that includes modules and classes general for all pages: 
    - Page Class - class that include all universal, re-usable methods for all pages, every page '_word.js' has methods that invoke universal methods from Page with current's page data from data dir. 
    - utilities.js module - some general methods data handling and validations not relay to the web driver using. 
    - drivers capabilities data that can be reuse for web driver selection.    
    
Page class is important as this class establish relations with Selenium Web Driver library and only via this class all interactions between our framework and Web drivers methods happen. 
It allow us to re-use the same methods from every page. 
Example: allOurValueElements() method from AboutUs page will call this.page.waitElementsLocatedByXpath, just placing data of Xpath locator, that individual for this element/page, but from home page we could create method: anyHomePageElements, that will call the same this.page.waitElementsLocatedByXpath method with own home page's element data. So we reuse the same method to interact of all our pages with WebDriver's method. So if we need change/update this interaction for all pages, we need just change this method, for example add logging functionality.

Selection of browsers added via Scenario outlet examples, it could be done via command line variables -world also. 
I didn't spend time for installation all 3 environments on my machine and for testing task it used with the same capabilities. Possible capabilities for Jenkins added as commented code. But the framework allow select any from pre-described webdriver, this is interesting task and I shown how it could be realized. 

Screenshot is possible to make for failed test, it same with failed scenario name and time with milliseconds for file unique naming. It is better (I normally use) to use date time stamp, it is more standard task for JavaScript I did not spend time. 

I created universal method to compare arrays, that they match. It compare the length of arrays also so in future we don't need to use separate methods to validate "number of elements, found and expected".