describe("Dashboard", () => {
  before("Login to the application", function () {
    cy.visit("/signin");
    cy.typeLogin({ email: "test@mail.com", password: "test12345" });
    cy.get("[data-cy=submit]").click();
  });
  it("sidebar progress link should work and go to /", () => {
    cy.get("#progress").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
