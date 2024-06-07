Feature: E2E Form Validation

    Scenario: Entered Name
        Given I visit the URL
        When I type name
        # Pass Value With Heading
            | name  | 
            | nimit |
        Then Name should be visible in Name textfield

    Scenario: Entered Email
        Given I visit the URL
        When I typed Email
        # Pass Value With Heading
            | email         |
            | nim@gmail.com |
        Then Email should be visible in Email field

    Scenario: Entered Password
        Given I visit the URL
        When I typed Password
        # Can Directly Pass Value
            | nimit@123 |
        Then Password should be present in Password field

    Scenario: Select Gender
        Given I visit the URL
        When I select the Gender
            | Male   |
        Then Selected gender should be visible

    Scenario: Submit Form
        Given I visit the URL
        When I click on submit button
        Then Confirmation message should show