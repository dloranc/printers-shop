describe('home page', function() {
  beforeEach(() => {
    cy.logout();
  })

  it('has a message about signing in or logging in when the user isn\'t logged', () => {
    cy.visit('/');

    cy.contains('Printers & Faxes Shop');

    cy.contains('Please, sign up or log in to see our products.');

    cy.contains('Sign up');
    cy.contains('Sign in');

    cy.get('[data-test=brand]')
      .parent()
      .should('have.attr', 'href')
      .and('include', '/');
  });

  it('is redirecting to the /shop route when the user is logged in', () => {
    cy.login();
    cy.visit('/');

    cy.get('[data-test=brand]')
      .parent()
      .should('have.attr', 'href')
      .and('include', '/shop');
  });
});
