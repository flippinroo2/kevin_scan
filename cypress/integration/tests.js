import { ApiPromise, WsProvider } from '@polkadot/api';

function initializeProvider(endpoint) {
  const provider = new WsProvider(endpoint);
  return ApiPromise.create({ provider });
}

describe('Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000');
  });

  it('fills out form fields', () => {
    cy.fixture('form.json').as('formData');
    cy.get('@formData').then((data) => {
      const { startBlock, endBlock } = data;
      cy.get('#startBlock').clear().type(startBlock);
      cy.get('#endBlock').type(endBlock);
    });
  });

  it('begins blockchain scan', () => {
    cy.wait(3000);
    cy.get('.scan_button').click();
  });

  it('expands first row in table', () => {
    cy.get('.ant-table-row-level-0').as('firstRow');
    cy.get('@firstRow').click();
  });

  it('sorts rows in table', () => {
    cy.get('.ant-table-column-sorters').click();
  });

  it('sorts rows in table... again', () => {
    cy.get('.ant-table-column-sorters').click();
  });
});
