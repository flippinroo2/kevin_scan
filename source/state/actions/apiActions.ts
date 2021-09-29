import { ApiPromise, WsProvider } from '@polkadot/api';

const API_ERROR = 'API_ERROR';
const GET_API = 'GET_API';
const SET_API = 'SET_API';
const SET_BLOCKCHAIN = 'SET_BLOCKCHAIN';
const GET_BLOCKCHAIN = 'GET_BLOCKCHAIN';
const SET_ENDPOINT = 'SET_ENDPOINT';
const GET_ENDPOINT = 'GET_ENDPOINT';

function initializeProvider(endpoint: string) {
  const provider = new WsProvider(endpoint);
  return ApiPromise.create({ provider });
}

export function getApi() {
  return (dispatch: any) => {
    dispatch({
      type: GET_API,
    });
  };
}

export function setApi(payload: any) {
  return (dispatch: any) => {
    return initializeProvider(payload).then(
      (api) => {
        dispatch({ type: SET_API, payload: api });
      },
      (error) => {
        dispatch({ type: API_ERROR, payload: error });
      },
    );
  };
}

export const getBlockchain = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_BLOCKCHAIN,
    });
  };
};

export const setBlockchain = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_BLOCKCHAIN,
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

export const setEndpoint = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ENDPOINT,
      payload,
    });
  };
};

export const ACTION_TYPES = {
  API_ERROR,
  GET_API,
  SET_API,
  SET_BLOCKCHAIN,
  GET_BLOCKCHAIN,
  SET_ENDPOINT,
  GET_ENDPOINT,
};
