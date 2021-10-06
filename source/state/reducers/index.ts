import { combineReducers } from 'redux';

import apiReducers from './apiReducers';
import loadingReducers from './loadingReducers';
import metadataReducers from './metadataReducers';
import polkadotReducers from './polkadotReducers';
import tableReducers from './tableReducers';
import web3Reducers from './web3Reducers';

const reducers = {
  apiReducers: combineReducers(apiReducers),
  loadingReducers: combineReducers(loadingReducers),
  metadataReducers: combineReducers(metadataReducers),
  polkadotReducers: combineReducers(polkadotReducers),
  tableReducers: combineReducers(tableReducers),
  web3Reducers: combineReducers(web3Reducers),
};

export default combineReducers(reducers);
