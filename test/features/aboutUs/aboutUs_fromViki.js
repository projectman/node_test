// aboutUsSteps.js

Then('on opened page Title will be as expected', function () {
  return this.validateAboutUsPageTitle();
});


When('all expected values {string} present in', function (words) {

  // Convert received string of words in array of strings
  const expectedWords = words.split(', ')

  var foundWords = []; 
  const foundElements = this.getAllValueElements().then(function(elements) {
    elements.forEach(function(element) {

      // Get innerText attribute where name of value can be gotten
      element.getAttribute('innerText').then(function(text) {

        foundWords.push(text);
      });
    });;
  });

  let areMembersSame = utils.arraysWithSameMemebers(foundWords, expectedWords); 

  assert(
    areMembersSame, 
    `expected words: ${expectedWords} and found: ${foundWords} has different elements.`
    );

  return foundElements;
});

// worlds.js

getAllValueElements() {
  // <img src="/assets/images/icons/cyan/check.svg" alt="checkmark icon" height="25" class="mr-2"></img>
  const locator = "//span[./img[@alt='checkmark icon']]";
  return this.driver.wait(until.elementsLocated(By.xpath(locator), 1000));
  }; 

// utils.js


    /**
     * Compare 2 received arrays, Arrays can be with string or numbers
     * but not objects
     * @param {Array[Union[number, string]]} array1 
     * @param {Array[Union[number, string]]} array2 
     * @returns {boolean} - True if arrays has the same 
     */
    arraysWithSameMemebers(array1, array2){

        console.log(`arraysWithSameMemebers will compare for ${array1}, ${array2}`);

        // Validate lenths to protect comparing py item
        if(arr1.length != arr2.legth) {
            return False
        };

        // Make elements in the same order
        const arr1 = array1.concat().sort();
        const arr2 = array2.concat().sort(); 

        arr1.every(function(element, index) {

            let element2 = arr2[index];

            if (typeof element2 == 'string') {
                element2 = element2.toLocaleLowerCase()
            };

            if (typeof element == 'string') {
                element = element.toLowerCase()
            };
            console.log(`compare elements: ${element} with ${element2}`);
            if (element !== element2) {
                return False
            };
        });

        // no inequal elements were found, result positive
        return true; 
    }

}

