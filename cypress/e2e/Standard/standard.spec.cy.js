import {Given, when, Then, When} from '@badeball/cypress-cucumber-preprocessor'
Given(/^I launch the SwagLab site$/, () =>{
    cy.LaunchApp();
});

Then(/^I insert the standard username$/, () =>{
    cy.InsertUsername();
});

Then(/^I insert the standard password$/, () =>{
    cy.InsertPassword();
});

When(/^I click the Login button$/, () =>{
    cy.ClickLogin();
});

Then(/^I should see the products page$/, () =>{
    cy.VerifyProduct();
});