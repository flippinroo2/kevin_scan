import { combineReducers } from 'redux';

import apiReducers from './apiReducers';
import loadingReducers from './loadingReducers';
import polkadotReducers from './polkadotReducers';
import tableReducers from './tableReducers';

const reducers = {
  apiReducers: combineReducers(apiReducers),
  loadingReducers: combineReducers(loadingReducers),
  polkadotReducers: combineReducers(polkadotReducers),
  tableReducers: combineReducers(tableReducers),
};

export default combineReducers(reducers);
