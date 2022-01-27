Feature: Home page

    Chose browser, open Home page, validate title

    Scenario: Open Home page
        Given user choses browser chrome
        And user open Home Page
        When find link contains text "About Us" and click it
        # "//a[contains(text(), 'About Us')]"
        Then on opened page quantity of located Our Values elements eqal 3
        And all expected values "Accountable, Realiable, Ethical" present in  
