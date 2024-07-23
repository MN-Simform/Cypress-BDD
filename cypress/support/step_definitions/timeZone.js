import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// Scenario: Verify Time Zones Are Displayed
// Given I visit the URL
// Then I should see the current time
// And I should see the current time in USA
// And I should see the current time in Korea

Given('I visit the LambdaTest URL', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/virtual-dom');
})

Then('I should see the current time', () => {
    cy.contains('h2', 'Current Time:').should('be.visible');
})

Then('I should see the current time in USA', () => {
    cy.contains('h2', 'Current Time in USA:').should('be.visible');
})

Then('I should see the current time in Korea', () => {
    cy.contains('h2', 'Current Time in Korea:').should('be.visible');
})

// Scenario: Current time updates dynamically
// Given I visit the URL
// When I wait for a short period of time
// Then The current time should be updated
// And The current time in USA shuold be updated
// And The current time in Korea should be updated

When('I wait for a short period of time', () => {
    cy.wait(1000);
})

Then('The current time should be updated', () => {
    cy.contains('h2', 'Current Time:').invoke('text').then(currentTime => {
        cy.wait(1000)
        cy.contains('h2', 'Current Time:').invoke('text').then(updatedTime => {
            expect(updatedTime).not.to.be.eq(currentTime);
        })
    })
})

Then('The current time in USA shuold be updated', () => {
    cy.contains('h2', 'Current Time in USA:').invoke('text').then(currentTime => {
        cy.wait(1000)
        cy.contains('h2', 'Current Time in USA:').invoke('text').then(updatedTime => {
            expect(updatedTime).not.to.be.eq(currentTime);
        })
    })
})

Then('The current time in Korea should be updated', () => {
    cy.contains('h2', 'Current Time in Korea:').invoke('text').then(currentTime => {
        cy.wait(1000)
        cy.contains('h2', 'Current Time in USA:').invoke('text').then(updatedTime => {
            expect(updatedTime).not.to.be.eq(currentTime);
        })
    })
})

// Scenario: Verify time zones in different viewports
// Given I visit the URL
// When I view the page in mobile resolution
// Then I should see the current time in mobile resolution
// And I should see the current time in USA in mobile resolution
// And I should see the current time in Korea in mobile resolution

// When I view the page in tablet resolution
// Then I should see the current time in tablet resolution
// And I should see the current time in USA in tablet resolution
// And I should see the current time in Korea in tablet resolution

// When I view the page in desktop resolution
// Then I should see the current time in desktop resolution
// And I should see the current time in USA in desktop resolution
// And I should see the current time in Korea in desktop resolution

When('I view the page in mobile resolution', () => {
    cy.viewport('iphone-6');
});

Then('I should see the current time in mobile resolution', () => {
    cy.contains('h2', 'Current Time:').should('be.visible');
});

Then('I should see the current time in USA in mobile resolution', () => {
    cy.contains('h2', 'Current Time in USA:').should('be.visible');
});

Then('I should see the current time in Korea in mobile resolution', () => {
    cy.contains('h2', 'Current Time in Korea:').should('be.visible');
});

When('I view the page in tablet resolution', () => {
    cy.viewport('ipad-2');
});

Then('I should see the current time in tablet resolution', () => {
    cy.contains('h2', 'Current Time:').should('be.visible');
});

Then('I should see the current time in USA in tablet resolution', () => {
    cy.contains('h2', 'Current Time in USA:').should('be.visible');
});

Then('I should see the current time in Korea in tablet resolution', () => {
    cy.contains('h2', 'Current Time in Korea:').should('be.visible');
});

When('I view the page in desktop resolution', () => {
    cy.viewport(1280, 800);
});

Then('I should see the current time in desktop resolution', () => {
    cy.contains('h2', 'Current Time:').should('be.visible');
});

Then('I should see the current time in USA in desktop resolution', () => {
    cy.contains('h2', 'Current Time in USA:').should('be.visible');
});

Then('I should see the current time in Korea in desktop resolution', () => {
    cy.contains('h2', 'Current Time in Korea:').should('be.visible');
});