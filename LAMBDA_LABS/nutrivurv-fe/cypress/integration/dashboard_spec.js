describe("Dashboard", () => {
  it("Should successfully complete the signin form and redirect to /dashboard", () => {
    cy.visit("/signin");
    cy.typeLogin({ email: "test@mail.com", password: "test12345" });
    cy.get("[data-cy=submit]").click();
  });

  it("Toggler should not be visibe", () => {
    cy.get("navbar-toggler").should("not.be.visible");
  });
  it("Sidebar Budget should populate data", () => {
    cy.get(".data").should("be.visible");
    cy.get("#calories").contains("2214 kcal");
    cy.get("#fats").contains("62 g");
    cy.get("#carbs").contains("123 g");
    cy.get("#protein").contains("62 g");
  });
  it("should set viewport to mobile size", () => {
    cy.viewport(576, 750);
    cy.get(".navbar-toggler").should("be.visible");
    cy.get(".navbar-toggler").click();
    cy.get("#sidebar").find("a").should("be.visible");
  });
  it("Settings button should have dropdown", () => {
    cy.get("#dropdownMenuButton").click();
    cy.get("#profile").should("be.visible");
    cy.get("#logout").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});

describe("Dashboard logo and user profile link", () => {
  before("Login to the application", function () {
    cy.visit("/signin");
    cy.typeLogin({ email: "test@mail.com", password: "test12345" });
    cy.get("[data-cy=submit]").click();
  });
  it("Logo should be visible and link to Home", () => {
    cy.get(".logoDash").should("be.visible");
    cy.get(".logoDash").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
  it("Profile link should be visible", () => {
    cy.get("#profileLink").should("be.visible");
  });
});
