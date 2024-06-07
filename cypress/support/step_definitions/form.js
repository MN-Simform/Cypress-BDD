///<reference types = "Cypress" />

import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

beforeEach(function () {
    cy.fixture('example').then(function (data) {
        this.data = data;
    })
})

// Scenario: Fillup Name
//         Given I visit the URL
//         When I type name
//         | name | email |
//         | nimit | nimit@gmail.com | 
//         Then Name should be visible in Name textfield

Given('I visit the URL', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

When('I type name', (dataTable) => {
    cy.get('.form-group input[name=name]').type(dataTable.rawTable[1][0])
})

Then('Name should be visible in Name textfield', function () {
    cy.get('.form-group input[name=name]').should('have.value', this.data.name);
})


// Scenario: Entered Email
//         When I typed Email
//         | email |
//         | nim@gmail.com|
//         Then Email should be visible in Email field

When('I typed Email', (dataTable) => {
    cy.get('input[name=email]').type(dataTable.rawTable[1][0])
})

Then('Email should be visible in Email field', function () {
    cy.get('input[name=email]').should('have.value', this.data.email)
})

// Scenario: Entered Password
//         Given I visit the URL
//         When I typed Password
//         | nimit@123 |
//         Then Password should be present in Password field 

When('I typed Password', (dataTable) => {
    cy.get('input[type=password]').type(dataTable.rawTable[0][0])
})

Then('Password should be present in Password field', () => {
    cy.get('input[type=password]').should('be.visible');
})

// Scenario: Select Gender
//         Given I visit the URL
//         When I select the Gender
//         | Gender |
//         | Male |
//         Then Selected gender should be visible

When('I select the Gender', (dataTable) => {
    cy.get('#exampleFormControlSelect1').select(dataTable.rawTable[0][0])
})

Then('Selected gender should be visible', function () {
    cy.get('#exampleFormControlSelect1').should('have.value', this.data.gender);
})

// Scenario: Submit Form
// Given I visit the URL
// When I click on submit button
// Then Confirmation message should show

When('I click on submit button', () => {
    cy.get('input[type=submit]').click();
})

Then('Confirmation message should show', () => {
    cy.get('div.alert').should('contain', ' The Form has been submitted successfully!')
})