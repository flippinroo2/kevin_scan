// Spying the console objects activated before window load.
Cypress.on('window:before:load', (win) => {
  cy.spy(win.console, 'debug');
  cy.spy(win.console, 'error');
  cy.spy(win.console, 'info');
  cy.spy(win.console, 'log');
  cy.spy(win.console, 'warn');
});
