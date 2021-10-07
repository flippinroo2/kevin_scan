const GET_NFT = 'GET_NFT';
const SET_NFT = 'SET_NFT';

export const getNft = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_NFT,
    });
  };
};

export const setNft = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_NFT,
      payload,
    });
  };
};

export const ACTION_TYPES = {
  GET_NFT,
  SET_NFT,
};
