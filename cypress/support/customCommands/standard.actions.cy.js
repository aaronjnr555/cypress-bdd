Cypress.Commands.add('LaunchApp', ()=>{
    cy.visit('/');
})

Cypress.Commands.add('InsertUsername', ()=>{
    cy.fixture("elements").then((el)=>{
        cy.get(el.usernameField).should("exist").type(el.username)
    })
})

Cypress.Commands.add('InsertPassword', ()=>{
    cy.fixture("elements").then((el)=>{
        cy.get(el.passwordField).should("exist").type(el.password)
    })
    
})

Cypress.Commands.add('ClickLogin', ()=>{
    cy.fixture("elements").then((el)=>{
        cy.get(el.loginButton).should("exist").click()
    })
})

Cypress.Commands.add('VerifyProduct', ()=>{
    cy.fixture("elements").then((el)=>{
        cy.get(el.productTitle).should("exist").and("contain",'Products')
    })
})