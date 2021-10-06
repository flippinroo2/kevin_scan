import { tableActions } from '../actions';

const { ADD_COLUMNS, ADD_ROW, ADD_ROWS, CLEAR_TABLE, SET_COLUMNS } =
  tableActions.ACTION_TYPES;

// TODO: Use correct type declaration here instead of any.
const columns = (state: {}[] = [], action: any) => {
  switch (action.type) {
    case ADD_COLUMNS:
      return [...state, ...action.payload];
    case SET_COLUMNS:
      return action.payload;
    default:
      return state;
  }
};

let rowId = 0;

const rows = (state: {}[] = [], action: any) => {
  switch (action.type) {
    case ADD_ROW:
      const key = `${++rowId}`;
      action.payload.key = key;
      return { rows: [...state, action.payload] };
    case ADD_ROWS:
      return { rows: [...state, action.payload] };
    case CLEAR_TABLE:
      return { rows: [] };
    default:
      return state;
  }
};

export default {
  columns,
  rows,
};
