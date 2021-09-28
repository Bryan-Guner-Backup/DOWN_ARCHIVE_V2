/// <reference types="Cypress" />

context('Login', () => {
	
	beforeEach(() => {
		
		cy.viewport(1920, 1080) 
		cy.clearCookies('token', 'qrcode');
		cy.clearLocalStorage();
		cy.window().then((win) => {
			win.sessionStorage.clear()
		})
	});

	it('logs in successfully, then logs out', () => {
		cy.visit('/')
		cy.contains('Login').click()
		cy.get('form').within(() => {
			cy.get('input[name="email"]').type('e2e-testing@swaap.co')
			cy.get('input[name="password"]').type('S#(]Kg(|sG83')
			cy.get('.auth0-lock-submit').click()

		})
		cy.contains('Notifications');
		cy.contains('Swaap QR Code');
		
		cy.contains('Logout').click({force: true});
	});
	
});
