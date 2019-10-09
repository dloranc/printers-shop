describe('home page', () => {
  beforeEach(() => {
    cy.logout();
  });

  it('has a message about signing in or logging in when the user isn\'t logged',
    () => {
      cy.visit('/');

      cy.contains('Printers & Faxes Shop');

      cy.contains('Please, sign up or log in to see our products.');
    }
  );
});
