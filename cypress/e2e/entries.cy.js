describe("entries", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("creates a new entry", () => {
    const label = "Coffee";
    const amount = "12.2";
    const date = "2025-04-30";

    cy.getDataTestId("newEntryButton").click();

    cy.getDataTestId("labelInput").type(label);
    cy.getDataTestId("amountInput").type(amount);
    cy.getDataTestId("dateInput").type(date);

    cy.getDataTestId("saveButton").click();

    cy.getDataTestId("entryCard")
      .last()
      .within(() => {
        cy.getDataTestId("entryLabel").should("have.text", label);
        cy.getDataTestId("entryAmount").should(
          "have.attr",
          "data-value",
          amount
        );
        cy.getDataTestId("entryDate").should("have.attr", "data-value", date);
      });
  });

  it("updates an entry", () => {
    const label = "Game";
    const amount = 50;

    cy.getDataTestId("updateButton").first().click();

    cy.getDataTestId("labelInput").clear().type(label);
    cy.getDataTestId("amountInput").clear().type(amount);

    cy.getDataTestId("saveButton").click();

    cy.getDataTestId("entryCard")
      .first()
      .within(() => {
        cy.getDataTestId("entryLabel").should("have.text", label);
        cy.getDataTestId("entryAmount").should(
          "have.attr",
          "data-value",
          amount
        );
      });
  });

  it("deletes an entry", () => {
    cy.getDataTestId("entryCard").then((entryCards) => {
      const length = entryCards.length;
      const lastEntryId = entryCards.last().data("id");

      cy.getDataTestId("deleteButton").last().click();
      cy.getDataTestId("entryCard")
        .last()
        .invoke("data", "id")
        .should("not.equal", lastEntryId);
      cy.getDataTestId("entryCard").should("have.length", length - 1);
    });
  });
});

