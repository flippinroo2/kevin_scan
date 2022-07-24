import { blockchainActions } from '../actions';

const {
  SET_BLOCKCHAIN,
  GET_BLOCKCHAIN,
  SET_CURRENCY,
  GET_CURRENCY,
  SET_ENDPOINT,
  GET_ENDPOINT,
} = blockchainActions.ACTION_TYPES;

const blockchain = (state: string = 'Polkadot', action: { type: string, payload: string }) => {
  switch (action.type) {
    case GET_BLOCKCHAIN:
      return state;
    case SET_BLOCKCHAIN:
      return action.payload;
    default:
      return state;
  }
};

const currency = (state: string = 'DOT', action: { type: string, payload: string }) => {
  switch (action.type) {
    case SET_CURRENCY:
      return state;
    case GET_CURRENCY:
      return state;
    default:
      return state;
  }
};

const endpoint = (state: string = 'wss://rpc.polkadot.io', action: { type: string, payload: string }) => {
  switch (action.type) {
    case GET_ENDPOINT:
      return state;
    case SET_ENDPOINT:
      return action.payload;
    default:
      return state;
  }
};

export default {
  blockchain,
  currency,
  endpoint,
};
