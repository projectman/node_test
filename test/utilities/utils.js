const { until, By } = require('selenium-webdriver')
const by = require('selenium-webdriver/lib/by')

module.exports = {

    xpathLinkWith(linkText) {
        return "//a[contains(text(), '" + linkText + "')]"
    }

}