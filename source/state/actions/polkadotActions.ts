const SET_CURRENCY = 'SET_CURRENCY';
const GET_CURRENCY = 'GET_CURRENCY';
const SET_GENESIS_BLOCK = 'SET_GENESIS_BLOCK';
const GET_GENESIS_BLOCK = 'GET_GENESIS_BLOCK';
const SET_CURRENT_BLOCK = 'SET_CURRENT_BLOCK';
const GET_CURRENT_BLOCK = 'GET_CURRENT_BLOCK';
const SET_ENDPOINT = 'SET_ENDPOINT';
const GET_ENDPOINT = 'GET_ENDPOINT';
const SET_LAST_BLOCK = 'SET_LAST_BLOCK';
const GET_LAST_BLOCK = 'GET_LAST_BLOCK';
const SET_LAST_FINALIZED_BLOCK = 'SET_LAST_FINALIZED_BLOCK';
const GET_LAST_FINALIZED_BLOCK = 'GET_LAST_FINALIZED_BLOCK';
const SET_BLOCK_HASH = 'SET_BLOCK_HASH';
const GET_BLOCK_HASH = 'GET_BLOCK_HASH';
const SET_BLOCK_NUMBER = 'SET_BLOCK_NUMBER';
const GET_BLOCK_NUMBER = 'GET_BLOCK_NUMBER';

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

export const getEndpoint = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_ENDPOINT,
      payload,
    });
  };
};

export const setEndpoint = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GET_ENDPOINT,
      payload,
    });
  };
};

export const setGenesisBlock = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_GENESIS_BLOCK,
      payload,
    });
  };
};

export const getGenesisBlock = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GET_GENESIS_BLOCK,
      payload,
    });
  };
};

export const setCurrentBlock = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_CURRENT_BLOCK,
      payload,
    });
  };
};

export const getCurrentBlock = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GET_CURRENT_BLOCK,
      payload,
    });
  };
};

export const setLastBlock = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_LAST_BLOCK,
      payload,
    });
  };
};

export const getLastBlock = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GET_LAST_BLOCK,
      payload,
    });
  };
};

export const setLastFinalizedBlock = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_LAST_FINALIZED_BLOCK,
      payload,
    });
  };
};

export const getLastFinalizedBlock = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GET_LAST_FINALIZED_BLOCK,
      payload,
    });
  };
};

export const setBlockHash = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_BLOCK_HASH,
      payload,
    });
  };
};

export const getBlockHash = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GET_BLOCK_HASH,
      payload,
    });
  };
};

export const setBlockNumber = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_BLOCK_NUMBER,
      payload,
    });
  };
};

export const getBlockNumber = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: GET_BLOCK_NUMBER,
      payload,
    });
  };
};

export const ACTION_TYPES = {
  SET_CURRENCY,
  GET_CURRENCY,
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
};
