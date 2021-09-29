const ADD_COLUMNS = 'ADD_COLUMN';
const ADD_ROW = 'ADD_ROW';
const ADD_ROWS = 'ADD_ROWS';
const CLEAR_TABLE = 'CLEAR_TABLE';
const SET_COLUMNS = 'SET_COLUMNS';

export const addColumns = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_COLUMNS,
      payload,
    });
  };
};

export const setColumns = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_COLUMNS,
      payload,
    });
  };
};

export const addRow = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_ROW,
      payload,
    });
  };
};

export const addRows = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: ADD_ROWS,
      payload,
    });
  };
};

export const clearTable = () => {
  return (dispatch: any) => {
    dispatch({
      type: CLEAR_TABLE,
    });
  };
};

export const ACTION_TYPES = {
  ADD_COLUMNS,
  ADD_ROW,
  ADD_ROWS,
  CLEAR_TABLE,
  SET_COLUMNS,
};
