Feature: About Us page
  In order to Validate About Us page:
  Move on the page by link in header row panel, 
  Compare Quantity of Values Elements with expected
  and Validate All Values from expected Vaues List Available on page

  Scenario: Validate About Us Page Opened
    Given user choses browser chrome
    And user open Home Page
    When user click link with text About Us
    # Then opened page inludes 3 Values elements
    # And Names of Values includes: "Accaountable, Reliable, Ethical"