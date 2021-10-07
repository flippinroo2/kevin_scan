import { web3Actions } from '../actions';

const {
  GET_MORALIS,
  SET_MORALIS,
  MORALIS_ERROR,
  GET_ETHERS,
  SET_ETHERS,
  GET_USER,
  SET_USER,
  GET_WEB3,
  SET_WEB3,
} = web3Actions.ACTION_TYPES;

const moralis = (state: {} = {}, action: { type: string, payload: any }) => {
  switch (action.type) {
    case GET_MORALIS:
      return state;
    case SET_MORALIS:
      return action.payload;
    default:
      return state;
  }
}

const user = (state: {} = {}, action: { type: string, payload: any }) => {
  switch (action.type) {
    case GET_USER:
      return state;
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}

export default { moralis, user };
