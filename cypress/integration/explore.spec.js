/// <reference types="cypress" />

describe('Testing Loader and Rendering List', () => {
  it('Loader and List Test', () => {
    cy.intercept('**/tickers').as('stocks');
    cy.visit('/');
    cy.get('[data-testid="loading"]').should('be.visible');
    cy.wait(1000);
    cy.get('[data-testid="stocks"]').should('be.visible');
  });
});
