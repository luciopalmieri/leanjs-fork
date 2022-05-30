/// <reference types="cypress" />

describe("Nextjs shell: error", () => {
  it("displays an error message when the remote app fails", () => {
    cy.intercept("**/remoteEntry.js", { statusCode: 500 });
    cy.visit("http://localhost:44443");

    cy.contains("Error: Failed to load script").should("be.visible");
  });

  it("displays an error message when the packageName of a remote app doesn't exist", () => {
    cy.visit("http://localhost:44443");
  });

  it("displays a custom error message when using an error component", () => {
    cy.visit("http://localhost:44443");
  });
});
