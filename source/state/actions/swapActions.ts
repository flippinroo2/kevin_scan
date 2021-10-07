const GET_FROM_TOKEN = 'GET_FROM_TOKEN';
const SET_FROM_TOKEN = 'SET_FROM_TOKEN';
const GET_TO_TOKEN = 'GET_TO_TOKEN';
const SET_TO_TOKEN = 'SET_TO_TOKEN';
const GET_TOKENS = "GET_TOKENS";
const SET_TOKENS = "SET_TOKENS";

export const getFromToken = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_FROM_TOKEN,
    });
  };
};

export const setFromToken = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_FROM_TOKEN,
      payload
    });
  };
};

export const getToToken = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_TO_TOKEN,
    });
  };
};

export const setToToken = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_TO_TOKEN,
      payload
    });
  };
};

export function getTokens() {
  return (dispatch: any) => {
    dispatch({
      type: GET_TOKENS,
    });
  };
}

export function setTokens(payload: any) {
  return (dispatch: any) => {
    dispatch({
      type: SET_TOKENS,
      payload
    });
  };
}

export const ACTION_TYPES = {
  GET_FROM_TOKEN,
  SET_FROM_TOKEN,
  GET_TO_TOKEN,
  SET_TO_TOKEN,
  GET_TOKENS,
  SET_TOKENS,
};
