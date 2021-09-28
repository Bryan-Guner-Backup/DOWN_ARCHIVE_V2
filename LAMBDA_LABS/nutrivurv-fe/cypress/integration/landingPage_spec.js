describe("Landing page", () => {
  it("should sucessfuly load", () => {
    cy.visit("http://localhost:3000");
  });

  it("Toggler should not be visibe", () => {
    cy.get("navbar-toggler").should("not.be.visible");
  });

  it("navbar logo link should work and go to /", () => {
    cy.get(".logo").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.go("back");
  });

  it("navbar Home link should work and go to /", () => {
    cy.get("#home").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.go("back");
  });

  it("navbar about link should work and go to /about", () => {
    cy.get("#about").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/about");
    });
    cy.go("back");
  });

  it("navbar sign in link should work and go to /signin", () => {
    cy.get("#signIn").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/signin");
    });
    cy.go("back");
  });

  it("navbar sign up link should work and go to /onboarding", () => {
    cy.get("#onboarding").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/onboarding");
    });
    cy.go("back");
  });

  it("sign up button should work and go to /onboarding", () => {
    cy.get("#onboarding-button").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/onboarding");
    });
    cy.go("back");
  });
});

describe("page on small screen size", () => {
  it("should set viewport to mobile size", () => {
    cy.viewport(576, 750);

    cy.get(".navbar-toggler").should("be.visible");

    cy.get(".navbar-toggler").click();
    cy.get("#navbar").find("a").should("be.visible");
  });
});
