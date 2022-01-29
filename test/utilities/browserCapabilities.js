'use strict';

var chromedriver = require('chromedriver');

/**
 * It keeps mapped capabilities of using browsers
 * 
 * HERE'S only 1 driver for different scenarios to avoid spend time for
 * environment settings. 
 */
module.exports = {

  chrome: {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true,
    chromeOptions: {
        args: ['start-maximized', 'disable-extensions']
    },
    path: chromedriver.path
  },
  firefox: {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true,
    chromeOptions: {
        args: ['start-maximized', 'disable-extensions']
    },
    path: chromedriver.path
  },
  mobile: {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true,
    chromeOptions: {
        args: ['start-maximized', 'disable-extensions']
    },
    path: chromedriver.path
  },

};