import { nftActions } from '../actions';

const { GET_NFT, SET_NFT } =
  nftActions.ACTION_TYPES;

const nft = (state: {} = {}, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SET_NFT:
      return action.payload;
    case GET_NFT:
      return state;
    default:
      return state;
  }
};

export default { nft };
