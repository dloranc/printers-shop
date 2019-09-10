describe('navbar', () => {
  beforeEach(() => {
    cy.logout();
  });

  it('has brand link to the /shop when the user is signed in and to / when not', () => {
    cy.get('[data-test=brand]')
      .should('have.attr', 'href')
      .and('include', '/');

    cy.login();
    cy.visit('/');

    cy.get('[data-test=brand]')
      .should('have.attr', 'href')
      .and('include', '/shop');
  });

  it('has "Sign up" and "Sign in" links', () => {
    cy.get('[data-test=sign-up]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/sign-up');

    cy.get('[data-test=sign-in]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/sign-in');
  });

  it('has inventory page or not depending on the user\'s role', () => {
    cy.login();
    cy.visit('/');

    cy.get('[data-test=inventory]')
      .should('not.exist');

    cy.logout();
    cy.loginAsAdmin();
    cy.visit('/');

    cy.get('[data-test=inventory]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/inventory');
  });

  it('has "cart", and "orders" links when the user is signed in', () => {
    cy.login();
    cy.visit('/');

    cy.get('[data-test=cart]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/cart');

    cy.get('[data-test=orders]')
      .should('exist')
      .should('have.attr', 'href')
      .and('include', '/orders');

    cy.get('[data-test=logout]').should('exist');
  });
});
