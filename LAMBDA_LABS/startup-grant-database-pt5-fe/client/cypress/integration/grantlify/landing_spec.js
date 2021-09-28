// this file tests the landing page for the development ready env

describe("Landing page testing,", function() {
  it("should contain hello world", function() {
    // cy.visit() tells cypress to visit the website to run the test
    cy.visit("https://www.grantlify.com/");
    // cy.contains makes sure the above url has the text inside of the invocation somewhere on the url
    cy.contains("Hello world");
  });
});
