/// <reference types="cypress" />
describe("page", () => {
  it("works", () => {
    cy.visit("cypress/fixtures/draft1.html");
  });
});
