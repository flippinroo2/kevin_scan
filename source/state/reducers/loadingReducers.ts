import { loadingActions } from '../actions';

const { GET_PERCENT_LOADED, LOADING, SET_PERCENT_LOADED } =
  loadingActions.ACTION_TYPES;

const loading = (state: boolean = true, action: any) => {
  switch (action.type) {
    case LOADING:
      return action.payload;
    default:
      return state;
  }
};

const percentLoaded = (state: number = 25, action: any) => {
  switch (action.type) {
    case SET_PERCENT_LOADED:
      return action.payload;
    case GET_PERCENT_LOADED:
      return state;
    default:
      return state;
  }
};

export default { loading, percentLoaded };
