describe("Food", () => {
  before("Login to the application", function () {
    cy.visit("/signin");
    cy.typeLogin({ email: "test@mail.com", password: "test12345" });
    cy.get("[data-cy=submit]").click();
  });
  it("sidebar food link should work and go to /", () => {
    cy.get("#food").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
