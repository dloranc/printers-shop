describe('sign in page', () => {
  beforeEach(() => {
    cy.logout();
    cy.visit('/sign-in');
  });

  it('has two inputs and submit button', () => {
    cy.get('[data-cy=email]')
      .type('john.s@ibm.com')
      .should('have.attr', 'type')
      .and('include', 'email');

    cy.get('[data-cy=password]')
      .type('mynameisjohn1')
      .should('have.attr', 'type')
      .and('include', 'password');

    cy.get('[data-cy=sign-in-button]')
      .contains('Sign in')
      .click();

    cy.url().should('include', '/shop');
  });
});
