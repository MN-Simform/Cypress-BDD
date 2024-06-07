Feature: Time Zone

    As a user
    I want to see the current times in different regions
    So that I can verify the times are displayed and updated correctly

    Scenario: Verify Time Zones Are Displayed
        Given I visit the URL
        Then I should see the current time
        And I should see the current time in USA
        And I should see the current time in Korea

    Scenario: Current time updates dynamically
        Given I visit the URL
        When I wait for a short period of time
        Then The current time should be updated
        And The current time in USA shuold be updated
        And The current time in Korea should be updated

    Scenario: Verify time zones in different viewports
        Given I visit the URL
        When I view the page in mobile resolution
        Then I should see the current time in mobile resolution
        And I should see the current time in USA in mobile resolution
        And I should see the current time in Korea in mobile resolution

        When I view the page in tablet resolution
        Then I should see the current time in tablet resolution
        And I should see the current time in USA in tablet resolution
        And I should see the current time in Korea in tablet resolution

        When I view the page in desktop resolution
        Then I should see the current time in desktop resolution
        And I should see the current time in USA in desktop resolution
        And I should see the current time in Korea in desktop resolution