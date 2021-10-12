import { loadPage } from '../helpers';

describe('Non Fungible Kevin', () => {
  it('successfully loads', () => {
    loadPage('http://localhost:3000/non_fungible_kevin');
  });

  it('H1', () => {
    cy.get('h1').should('eq', 'Non Fungible Kevin');
  });
});
