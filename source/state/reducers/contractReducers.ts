import { contractActions } from '../actions';

const { GET_CONTRACT, SET_CONTRACT } =
  contractActions.ACTION_TYPES;

const contract = (state: {} = {}, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SET_CONTRACT:
      return action.payload;
    case GET_CONTRACT:
      return state;
    default:
      return state;
  }
};

export default { contract };
