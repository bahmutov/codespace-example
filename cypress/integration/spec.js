// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
it('works', () => {
  cy.visit('/')
  cy.contains('h1', 'Codespace')
})