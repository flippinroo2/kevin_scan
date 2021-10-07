import { swapActions } from '../actions';

const { GET_FROM_TOKEN, SET_FROM_TOKEN, GET_TO_TOKEN, SET_TO_TOKEN,
  GET_TOKENS,
  SET_TOKENS, } =
  swapActions.ACTION_TYPES;

const fromToken = (state: {} = {}, action: { type: string, payload: {} }) => {
  switch (action.type) {
    case SET_FROM_TOKEN:
      return action.payload;
    case GET_FROM_TOKEN:
      return state;
    default:
      return state;
  }
};

const toToken = (state: {} = {}, action: { type: string, payload: {} }) => {
  switch (action.type) {
    case SET_TO_TOKEN:
      return action.payload;
    case GET_TO_TOKEN:
      return state;
    default:
      return state;
  }
};


const tokens = (state: {}[] = [], action: { type: string, payload: any }) => {
  switch (action.type) {
    case GET_TOKENS:
      return state;
    case SET_TOKENS:
      return action.payload;
    default:
      return state;
  }
}

export default { fromToken, toToken, tokens };
