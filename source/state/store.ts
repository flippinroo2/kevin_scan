import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import combinedReducers from './reducers';

const initialState = {};

export function configureStore(initialState = {}) {
  const store = createStore(
    combinedReducers,
    initialState,
    applyMiddleware(thunk),
  );
  return store;
}

const store = configureStore(initialState);

export default store;
