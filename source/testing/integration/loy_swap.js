import { checkMetadata, loadPage } from '../helpers';

describe('Loy Swap', () => {
  it('successfully loads', () => {
    loadPage('http://localhost:3000/loy_swap');
  });

  it('Check Page Metadata', () => {
    checkMetadata('Loy Swap');
  });
});
