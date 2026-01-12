describe('BrowserStack Sample Tests', () => {
  it('should load BrowserStack homepage', () => {
    cy.visit('/');
    cy.title().should('include', 'BrowserStack');
  });

  it('should find the Products link', () => {
    cy.visit('/');
    cy.contains('Products').should('be.visible');
  });

  it('should navigate to pricing page', () => {
    cy.visit('/pricing');
    cy.title().should('include', 'Pricing');
  });

  it('should check for Sign In button', () => {
    cy.visit('/');
    cy.contains('Sign In').should('exist');
  });
});
