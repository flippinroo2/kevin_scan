import { combineReducers } from 'redux';

import blockchainReducers from './blockchainReducers';
import contractReducers from './contractReducers';
import loadingReducers from './loadingReducers';
import metadataReducers from './metadataReducers';
import nftReducers from './nftReducers';
import polkadotReducers from './polkadotReducers';
import swapReducers from './swapReducers';
import tableReducers from './tableReducers';
import web3Reducers from './web3Reducers';

const reducers = {
  blockchainReducers: combineReducers(blockchainReducers),
  contractReducers: combineReducers(contractReducers),
  loadingReducers: combineReducers(loadingReducers),
  metadataReducers: combineReducers(metadataReducers),
  nftReducers: combineReducers(nftReducers),
  polkadotReducers: combineReducers(polkadotReducers),
  swapReducers: combineReducers(swapReducers),
  tableReducers: combineReducers(tableReducers),
  web3Reducers: combineReducers(web3Reducers),
};

export default combineReducers(reducers);
