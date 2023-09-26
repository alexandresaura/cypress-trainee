describe('translation', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('translates to portuguese', () => {
    cy.get('h1').should('have.text', 'Finance')
    cy.get('select').select('pt');
    cy.get('h1').should('have.text', 'Finanças')
  });

  it('translates to english', () => {
    cy.get('select').select('en');
    cy.get('h1').should('have.text', 'Finance')
  })
})
