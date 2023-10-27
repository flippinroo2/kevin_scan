const GET_CONTRACT = 'GET_CONTRACT';
const SET_CONTRACT = 'SET_CONTRACT';

export const getContract = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_CONTRACT,
    });
  };
};

export const setContract = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_CONTRACT,
      payload,
    });
  };
};

export const ACTION_TYPES = {
  GET_CONTRACT,
  SET_CONTRACT,
};
