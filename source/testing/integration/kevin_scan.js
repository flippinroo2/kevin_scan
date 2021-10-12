import { checkMetadata, initalizePolkadotProvider, loadPage } from '../helpers';

describe('Kevin Scan', () => {
  it('Successfully loads', () => {
    loadPage('http://localhost:3000/kevin_scan');
  });

  it('Initializes Polkadot WebSocket provider', () => {
    initalizePolkadotProvider('wss://rpc.polkadot.io');
  });

  it('Check Page Metadata', () => {
    checkMetadata('Kevin Scan');
  });

  it('Begins blockchain scan', () => {
    cy.wait(4000);
    cy.get('.scan_button').click();
  });

  it('Fills out form fields', () => {
    cy.fixture('form.json').as('formData');
    cy.get('@formData').then((data) => {
      const { startBlock, endBlock } = data;
      cy.get('#blockchainData_startBlock').clear().type(endBlock);
      // Expect 1st error
      // .ant-form-item-explain-error .alert = Start Block must be less than End Block.
      cy.get('#blockchainData_endBlock').clear().type(startBlock);
      // Expect 2nd error
      // .ant-form-item-explain-error .alert = End Block must be greater than Start Block.
    });
  });

  it('Expands first row in table', () => {
    cy.get('.ant-table-row-level-0').first().as('firstRow');
    cy.get('@firstRow').click();
  });

  it('Sorts rows in table', () => {
    cy.get('.ant-table-column-sorters').click();
    // .next();
    // Expect first row to have a greater number than next row
  });

  it('Sorts rows in table... again', () => {
    cy.get('.ant-table-column-sorters').click();
    // Expect first row to have a lower number than next row
  });
});
