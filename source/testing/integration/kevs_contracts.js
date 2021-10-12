import { loadPage } from '../helpers';

describe("Kev's Contracts", () => {
  it('successfully loads', () => {
    loadPage('http://localhost:3000');
  });

  it('H1', () => {
    cy.get('h1').should('eq', "Kev's Contracts");
  });
});
