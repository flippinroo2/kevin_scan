import { metadataActions } from '../actions';

const { GET_SITE_COLOR, SET_SITE_COLOR, GET_SITE_TITLE, SET_SITE_TITLE } =
  metadataActions.ACTION_TYPES;

const color = (state: string = "#0fd9e9", action: { type: string, payload: string }) => {
  switch (action.type) {
    case GET_SITE_COLOR:
      return state;
    case SET_SITE_COLOR:
      return action.payload;
    default:
      return state;
  }
}
const title = (state: string = "Kevin Scan", action: { type: string, payload: string }) => {
  switch (action.type) {
    case GET_SITE_TITLE:
      return state;
    case SET_SITE_TITLE:
      return action.payload;
    default:
      return state;
  }
}

export default { color, title };
