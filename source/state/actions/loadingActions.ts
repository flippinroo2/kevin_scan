const GET_PERCENT_LOADED = 'GET_PERCENT_LOADED';
const LOADING = 'LOADING';
const SET_PERCENT_LOADED = 'SET_PERCENT_LOADED';

export const getPercentLoaded = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_PERCENT_LOADED,
    });
  };
};

export const setPercentLoaded = (payload: number) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_PERCENT_LOADED,
      payload,
    });
  };
};

export const setLoading = () => {
  return (dispatch: any) => {
    dispatch({
      type: LOADING,
      payload: true,
    });
  };
};

export const setLoaded = () => {
  return (dispatch: any) => {
    dispatch({
      type: LOADING,
      payload: false,
    });
  };
};

export const ACTION_TYPES = {
  GET_PERCENT_LOADED: 'GET_PERCENT_LOADED',
  SET_PERCENT_LOADED: 'SET_PERCENT_LOADED',
  LOADING: 'LOADING',
};
