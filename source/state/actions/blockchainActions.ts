const SET_BLOCKCHAIN = 'SET_BLOCKCHAIN';
const GET_BLOCKCHAIN = 'GET_BLOCKCHAIN';
const SET_CURRENCY = 'SET_CURRENCY';
const GET_CURRENCY = 'GET_CURRENCY';
const SET_ENDPOINT = 'SET_ENDPOINT';
const GET_ENDPOINT = 'GET_ENDPOINT';


export const getBlockchain = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_BLOCKCHAIN,
    });
  };
};

export const setBlockchain = (payload: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_BLOCKCHAIN,
      payload,
    });
  };
};

export const setCurrency = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_CURRENCY,
      payload,
    });
  };
};

export const getCurrency = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GET_CURRENCY,
      payload,
    });
  };
};

export const getEndpoint = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_ENDPOINT,
    });
  };
};

export const setEndpoint = (payload: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ENDPOINT,
      payload,
    });
  };
};

export const ACTION_TYPES = {
  SET_BLOCKCHAIN,
  GET_BLOCKCHAIN,
  SET_CURRENCY,
  GET_CURRENCY,
  SET_ENDPOINT,
  GET_ENDPOINT,
};
