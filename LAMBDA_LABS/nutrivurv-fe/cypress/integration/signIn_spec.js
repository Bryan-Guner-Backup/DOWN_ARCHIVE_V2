describe("Sign In forms", () => {
  it("should sucessfuly load sign in page", () => {
    cy.visit("http://localhost:3000/signin");
  });

  it("Should show errors under inputs ", () => {
    cy.get("[data-cy=submit]").click();
  });

  it("Should complete initial sign up form", () => {
    cy.get("form").within(() => {
      cy.get('input[name="email"]')
        .type("email@gmail.com")
        .should("have.value", "email@gmail.com");
      cy.get('input[name="password"]')
        .type("password")
        .should("have.value", "password");
      cy.get("[data-cy=submit]").click();
    });
  });
});
