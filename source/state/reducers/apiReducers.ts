import { apiActions } from '../actions';

const {
  API_ERROR,
  GET_API,
  SET_API,
  SET_BLOCKCHAIN,
  GET_BLOCKCHAIN,
  SET_ENDPOINT,
  GET_ENDPOINT,
} = apiActions.ACTION_TYPES;

const api = (state: {} = {}, action: any) => {
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

const blockchain = (state: string = 'Polkadot', action: any) => {
  switch (action.type) {
    case GET_BLOCKCHAIN:
      return state;
    case SET_BLOCKCHAIN:
      return action.payload;
    default:
      return state;
  }
};

const endpoint = (state: string = 'wss://rpc.polkadot.io', action: any) => {
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
  api,
  blockchain,
  endpoint,
};
