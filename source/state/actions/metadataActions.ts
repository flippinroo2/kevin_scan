const GET_SITE_TITLE = "GET_SITE_TITLE";
const SET_SITE_TITLE = "SET_SITE_TITLE";
const GET_SITE_COLOR = "GET_SITE_COLOR";
const SET_SITE_COLOR = "SET_SITE_COLOR";

export const getSiteTitle = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_SITE_TITLE,
    });
  };
};

export const setSiteTitle = (payload: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_SITE_TITLE,
      payload,
    });
  };
};

export const getSiteColor = () => {
  return (dispatch: any) => {
    dispatch({
      type: GET_SITE_COLOR,
    });
  };
};

export const setSiteColor = (payload: string) => {
  return (dispatch: any) => {
    dispatch({
      type: SET_SITE_COLOR,
      payload,
    });
  };
};

export const ACTION_TYPES = {
  GET_SITE_TITLE: 'GET_SITE_TITLE', SET_SITE_TITLE: 'SET_SITE_TITLE',
  GET_SITE_COLOR: 'GET_SITE_COLOR', SET_SITE_COLOR: 'SET_SITE_COLOR'
};
