import { checkMetadata, loadPage } from '../helpers';

describe('Home Page', () => {
  it('Successfully loads', () => {
    loadPage('http://localhost:3000');
  });

  it('Check Page Metadata', () => {
    checkMetadata('Homepage');
  });

  it('Test popout menu', () => {
    cy.get('.site_header__menu-toggle').click();
    cy.get('.site_menu').should('be.visible');
    cy.get('.site_header__menu-toggle').click();
    cy.get('.site_menu').should('be.hidden');
  });

  it('Test web3 integration', (error) => {
    console.log(error);
    cy.get('.site_header__connect').should('have.text', 'Connect');
    cy.get('.site_header__connect').click();
    cy.get('.user_login__button .ant-dropdown-trigger').trigger('mouseover');
    cy.get('.user_actions__menu').contains('authenticated').click();
    // cy.get('.user_login__button').invoke('show');
    // cy.get('.user_actions__menu').contains('logOut');

    // cy.window().get('@consoleLog').debug();
    cy.window().then((win) => {
      console.log(win);
      // expect(win.console.log).to.have.callCount(0);
    });
  });
});
