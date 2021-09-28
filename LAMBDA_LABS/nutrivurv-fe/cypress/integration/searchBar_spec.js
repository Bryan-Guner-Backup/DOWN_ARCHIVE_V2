describe("Searchbar", () => {
  before("Login to the application", function () {
    cy.visit("/signin");
    cy.typeLogin({ email: "test@mail.com", password: "test12345" });
    cy.get("[data-cy=submit]").click();
  });
  it("Add to Journal button should work", () => {
    cy.get("#add-journal").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/dashboard/food-search");
    });
  });

  it("Placeholder Image should be visible before searching", () => {
    cy.get("#searchPlaceholder").should("be.visible");
  });

  it("Searchbar should function", () => {
    cy.get("#inputSearch").type("Bacon");
    cy.get("[data-cy=submit]").click();
  });

  it("Loader should popup when searching", () => {
    cy.get(".loader").should("be.visible");
  });

  it("Search Results List should appear", () => {
    cy.get("#searchList").should("be.visible");
    cy.get("#searchList").contains("Bacon");
  });

  it("Nutrient Placeholder should be visible after search", () => {
    cy.get("#ntPlaceholder").should("be.visible");
  });

  it("Pagination should work", () => {
    cy.get("#pagination").should("be.visible");
    cy.get("#1stPage").contains("1");
    cy.get("#1stPage").click();
    cy.get("#2ndPage").contains("2");
    cy.get("#2ndPage").click();
    cy.get("#3rdPage").contains("3");
    cy.get("#3rdPage").click();
    cy.get("#nextPage").click();
    cy.get("#1stPage").contains("4");
    cy.get("#1stPage").click();
    cy.get("#2ndPage").contains("5");
    cy.get("#2ndPage").click();
    cy.get("#3rdPage").contains("6");
    cy.get("#3rdPage").click();
    cy.get("#backPage").click();
  });

  it("Should be able to Click on item in list", () => {
    cy.get("#searchItem").should("be.visible");
    cy.get("#searchItem").click();
  });

  it("Nutrition Card should appear after item click", () => {
    cy.get(".nutrition").should("be.visible");
  });

  it("Should be able to submit Nutrient update", () => {
    cy.get("form").within(() => {
      cy.get('input[name="item_quantity"]').type("2");
      cy.get("#measures").should("be.visible");
      cy.get("[data-cy=submit2]").click();
    });
  });
});
