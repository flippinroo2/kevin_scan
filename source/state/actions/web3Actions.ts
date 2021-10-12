const AUTHENTICATE_MORALIS = "AUTHENTICATE_MORALIS";
const GET_MORALIS = "GET_MORALIS";
const SET_MORALIS = "SET_MORALIS";
const LOGIN_MORALIS = "LOGIN_MORALIS";
const LOGOUT_MORALIS = "LOGOUT_MORALIS";
const SIGNUP_MORALIS = "SIGNUP_MORALIS";
const MORALIS_ERROR = "MORALIS_ERROR";
const GET_ETHERS = "GET_ETHERS";
const SET_ETHERS = "SET_ETHERS";
const ETHERS_ERROR = "ETHERS_ERROR";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const GET_WEB3 = "GET_WEB3";
const SET_WEB3 = "SET_WEB3";
const WEB3_ERROR = "WEB3_ERROR";

export function getMoralis() {
  return (dispatch: any) => {
    dispatch({
      type: GET_MORALIS,
    });
  };
}

export function authenticateMoralis() {
  return (dispatch: any) => {
    dispatch({
      type: AUTHENTICATE_MORALIS,
    });
  };
}

export function loginMoralis() {
  return (dispatch: any) => {
    dispatch({
      type: LOGIN_MORALIS,
    });
  };
}

export function logoutMoralis() {
  return (dispatch: any) => {
    dispatch({
      type: LOGOUT_MORALIS,
    });
  };
}

export function signUpMoralis() {
  return (dispatch: any) => {
    dispatch({
      type: SIGNUP_MORALIS,
    });
  };
}

export function setMoralis(data: any) {
  return (dispatch: any) => {
    dispatch({
      type: SET_MORALIS,
      payload: data
    });
  };
}

export function getUser() {
  return (dispatch: any) => {
    dispatch({
      type: GET_USER,
    });
  };
}

export function setUser(payload: any) {
  return (dispatch: any) => {
    dispatch({
      type: SET_USER,
      payload
    });
  };
}

export const ACTION_TYPES = {
  AUTHENTICATE_MORALIS,
  GET_MORALIS,
  SET_MORALIS,
  LOGIN_MORALIS,
  LOGOUT_MORALIS,
  SIGNUP_MORALIS,
  MORALIS_ERROR,
  GET_ETHERS,
  SET_ETHERS,
  GET_USER,
  SET_USER,
  GET_WEB3,
  SET_WEB3,
};
