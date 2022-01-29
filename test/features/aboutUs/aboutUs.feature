Feature: Our Values elements on About Us page

    As User I Chose one browser from exmaples list, 
    navigage to About Us page
    Find Our Values elements with expected quantity and 
    all Values include expected Content

    Scenario Outline: Find Out Vaues elements to validate quantity and content
        Given user choses browser "<browser>"
        And user open Home Page
        When find link contains text "About Us" and click it
        Then on opened page Title will be as expected
        And on opened page quantity of located Our Values elements equal 3
        And all expected values "Accountable, Reliable, Ethical" present in  

        Examples:
            | browser |
            | chrome  |
            | firefox |
            | mobile  |

# TODO: Add re method? 
# TODO: add capabilities: 'os', itc... in chromeDriver.js 
# TODO: check indention size on all pages
# TODO: delete aboutUs_fromViki.js file