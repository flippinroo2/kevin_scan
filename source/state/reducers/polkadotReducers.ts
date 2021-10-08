import { polkadotActions } from '../actions';

const {
  API_ERROR,
  GET_API,
  SET_API,
  SET_GENESIS_BLOCK,
  GET_GENESIS_BLOCK,
  SET_CURRENT_BLOCK,
  GET_CURRENT_BLOCK,
  SET_ENDPOINT,
  GET_ENDPOINT,
  SET_LAST_BLOCK,
  GET_LAST_BLOCK,
  SET_LAST_FINALIZED_BLOCK,
  GET_LAST_FINALIZED_BLOCK,
  SET_BLOCK_HASH,
  GET_BLOCK_HASH,
  SET_BLOCK_NUMBER,
  GET_BLOCK_NUMBER,
} = polkadotActions.ACTION_TYPES;

const api = (state: {} = {}, action: { type: string, payload: any }) => {
  switch (action.type) {
    case API_ERROR:
      return state;
    case GET_API:
      return state;
    case SET_API:
      return action.payload;
    default:
      return state;
  }
};

const block = (
  state: { endBlock: number, genesisBlock: number, lastBlock: number, lastFinalizedBlock: number, startBlock: number } = {
    endBlock: 2,
    genesisBlock: 0,
    lastBlock: 0,
    lastFinalizedBlock: 0,
    startBlock: 1,
  },
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case SET_GENESIS_BLOCK:
      return state;
    case GET_GENESIS_BLOCK:
      return state;
    case SET_CURRENT_BLOCK:
      return state;
    case GET_CURRENT_BLOCK:
      return state;
    case SET_BLOCK_HASH:
      return state;
    case GET_BLOCK_HASH:
      return state;
    case SET_LAST_BLOCK:
      return state;
    case GET_LAST_BLOCK:
      return state;
    case SET_LAST_FINALIZED_BLOCK:
      return state;
    case GET_LAST_FINALIZED_BLOCK:
      return state;
    case SET_BLOCK_NUMBER:
      return state;
    case GET_BLOCK_NUMBER:
      return state;
    default:
      return state;
  }
};

const endpoint = (state: string = 'wss://rpc.polkadot.io', action: { type: string, payload: string }) => {
  switch (action.type) {
    case SET_ENDPOINT:
      return state;
    case GET_ENDPOINT:
      return state;
    default:
      return state;
  }
};

export default {
  api,
  block,
  endpoint,
};
