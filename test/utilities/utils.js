


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
    if(array1.length != array2.length) { console.log('false 1'); return false;  };

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
        console.log('false from here:');
        return false
      };
    }

  // no unequal elements were found, result positive
  return true; 
  }

}