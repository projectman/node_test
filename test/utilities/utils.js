const fs = require('fs');
const SCREEN_DIR = './test/reports/screens/'


/**
 * Prototype of utilities module with helping methods can be 
 * reused on different pages. NOTE:
 */
module.exports = {

  /**
   * Compare 2 received arrays, Arrays can be with string or numbers
   * but not objects
   * @param {Array[Union[number, string]]} array1 
   * @param {Array[Union[number, string]]} array2 
   * @returns {boolean} - True if arrays have the same members
   */
  arraysWithSameMemebers(array1, array2){

    // Validate length to protect comparing py item
    if(array1.length != array2.length) { 
      console.log(`Lengths of arrays different: ${array1.length}, ${array2}`); 
      return false;  
    };

    // Make elements in the same order
    const arr1 = array1.concat().sort();
    const arr2 = array2.concat().sort(); 

    // compare every pair of elements with possible string format
    for (let index = 0; index < arr1.length; index++) {
      let element1 = arr1[index];
      let element2 = arr2[index];

      if (typeof element1 == 'string') {
        element1 = element1.toLocaleLowerCase()
      };
      if (typeof element2 == 'string') {
        element2 = element2.toLowerCase()
      };
      // DEBUG DELETE
      if (element1 !== element2) {
        console.log(`Not equal elements: ${element1} with ${element2}`);
        return false
      };
    }

  // no unequal elements were found, result positive
  return true; 
  },

  /**
   * Create name file for the folder reports/screens
   * based on scenario name: testCase.pickle.name
   * @param : {Promise} - screenshotData - data of screenshot  
   * @param : {string} - scenarioName, name of scenario where test failed
   * @returns : {void}
   */
  saveScreenshot(screenshotData, scenarioName){

    // Take tike value for individual test case name, may be updated to 
    // standard datetime stamp function. 
    const nowTime = new Date().getTime();

    const fileName = scenarioName.split(' ').join('_') + '_' + nowTime + '.png';
    const fullPath = SCREEN_DIR + fileName;

    fs.writeFileSync(fullPath, screenshotData, 'base64')
    console.log('Screenshot file was successfully saved with path: ' + fullPath);

  }
}