describe('Entries', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.seedEntries();
  })

  it('creates entry', () => {
    const entryLabel = 'test';
    const entryAmount = 10.5;
    const entryDate = new Date();
    entryDate.setHours(0,0,0,0);

    cy.getDataTestId('newEntryButton').click();

    cy.getDataTestId('labelInput').type(entryLabel);
    cy.getDataTestId('amountInput').type(entryAmount);
    cy.getDataTestId('dateInput').type(entryDate.toISOString().substring(0, 10));

    cy.getDataTestId('saveButton').click();

    cy.contains(entryLabel);
    cy.getDataTestId('entryDate').invoke('data', 'value').then((dataValue) => {
      cy.wrap(dataValue).should('eq', entryDate.toISOString());
    })

    cy.getDataTestId('entryAmount').invoke('data', 'value').then((dataValue) => {
      cy.wrap(dataValue).should('eq', entryAmount);
    })
  })

  it('edits entry', () => {
    const entryLabel = 'Game';
    const entryAmount = 50.00;

    cy.getDataTestId('entryEditButton').last().click();

    cy.getDataTestId('labelInput').type('{selectAll}{backspace}').type(entryLabel);
    cy.getDataTestId('amountInput').type('{selectAll}{backspace}').type(entryAmount);

    cy.getDataTestId('saveButton').click();

    cy.contains(entryLabel).closest('li').within(() => {
      cy.getDataTestId('entryAmount').invoke('data', 'value').then((dataValue) => {
        cy.wrap(dataValue).should('eq', entryAmount);
      });
    });
  });

  it('deletes entry', () => {
    cy.get('li').should('have.length', 3);
    cy.getDataTestId('entryDeleteButton').first().click();
    cy.get('li').should('have.length', 2);
  })
})
