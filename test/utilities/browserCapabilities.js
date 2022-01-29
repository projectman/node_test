'use strict';

const chromedriver = require('chromedriver');
// const firefox = require('geckodriver')


/**
 * It keeps mapped capabilities of using browsers
 * 
 * HERE'S only 1 driver for different scenarios to avoid spend time for
 * environment settings on my home machine. 
 */

module.exports = {

  chrome: {
    browserName: 'chrome',
    os: 'OS X',
    os_version : 'Monterey',
    javascriptEnabled: true,
    acceptSslCerts: true,
    chromeOptions: {
        args: ['start-maximized', 'disable-extensions']
    },
    path: chromedriver.path
  },

  // To save time on settings environment for my home machine, 
  // I used the same capabilities for different browser names. 
  
  // firefox: {
  //   browserName: 'firefox',
  //   os: 'OS X',
  //   os_version : 'Monterey',
  //   javascriptEnabled: true,
  //   acceptSslCerts: true,
  //   chromeOptions: {
  //       args: ['start-maximized', 'disable-extensions']
  //   },
  //   path: .path
  // },

  // To save time on settings environment for my home machine, 
  // I used the same capabilities for different browser names.  

  // mobile: var capabilities = {
  // "os_version" : "14",
  // "device" : "iPhone 12",
  // "real_mobile" : "true",
  // "browserstack.local" : "false",
  // "browserstack.user" : "USERNAME",
  // "browserstack.key" : "ACCESS_KEY",
  // "browserName" : "iPhone"
  // }

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