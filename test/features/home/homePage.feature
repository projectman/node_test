Feature: Home page

    Chose browser, open Home page, validate title

    Scenario: Open Home page
        Given user choses browser chrome
        When user open Home Page
        Then found expected Home Page title