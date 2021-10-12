import { ApiPromise, WsProvider } from '@polkadot/api';

const TIMEOUT = 4000;
const consoleOverrides = (win) => {
  cy.stub(win.console, 'debug').as('consoleDebug');
  cy.stub(win.console, 'error').as('consoleError');
  cy.stub(win.console, 'info').as('consoleInfo');
  cy.stub(win.console, 'log').as('consoleLog');
  cy.stub(win.console, 'warn').as('consoleWarn');
};

export function initalizePolkadotProvider(endpoint = 'wss://rpc.polkadot.io') {
  const provider = new WsProvider(endpoint);
  const api = ApiPromise.create({ provider });
  cy.wait(TIMEOUT);
  return api;
}

export function checkMetadata(title, timeout = TIMEOUT) {
  // cy.title(timeout).should('eq', title); // This doesn't work because the title is in the "index.html" file. Maybe this can be overridden.
  // cy.title(timeout).should('eq', title); // Returns the document.title peroperty of the current page.
  cy.get('.site_header__title code').should('have.text', title);
}

export function loadPage(URL) {
  cy.visit(URL, {
    method: 'GET',
    // onBeforeLoad: consoleOverrides,
    onLoad: (windowObject) => {
      console.log(windowObject);
    },
    timeout: TIMEOUT,
  });
}
