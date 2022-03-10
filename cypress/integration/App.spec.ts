describe('App', () => {
  beforeEach(() => {
    cy.viewport(1280, 960);
  });
  it('should open /', () => {
    cy.log('test for should open');
    cy.visit('/');
  });
});
