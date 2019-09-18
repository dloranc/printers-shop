describe('navbar', () => {
  beforeEach(() => {
    cy.logout();
  });

  it('has brand link to the /shop when the user is signed in and to / when not', () => {
    cy.get('[data-cy=brand]')
      .should('have.attr', 'href')
      .and('include', '/');

    cy.login();
    cy.visit('/');

    cy.get('[data-cy=brand]')
      .should('have.attr', 'href')
      .and('include', '/shop');
  });

  it('has "Sign up" and "Sign in" links', () => {
    cy.get('[data-cy=sign-up]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/sign-up');

    cy.get('[data-cy=sign-in]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/sign-in');
  });

  it('has inventory page or not depending on the user\'s role', () => {
    cy.login();
    cy.visit('/');

    cy.get('[data-cy=inventory]')
      .should('not.exist');

    cy.logout();
    cy.loginAsAdmin();
    cy.visit('/');

    cy.get('[data-cy=inventory]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/inventory');
  });

  it('has "cart", and "orders" links when the user is signed in', () => {
    cy.login();
    cy.visit('/');

    cy.get('[data-cy=cart]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/cart');

    cy.get('[data-cy=orders]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/orders');

    cy.get('[data-cy=logout]').should('exist');
  });
});
