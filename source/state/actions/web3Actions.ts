import {
  // CLP,
  // Cloud,
  // Config,
  // CoreManager,
  // Dot,
  // FacebookUtils,
  // File,
  // LiveQuery,
  Moralis,
  // Plugins,
  // Polygon,
  // Role,
  // Session,
  // Storage,
  // UI,
  // User,
  // Web3API,
  // authenticate,
  // initialize,
  // secret,
  // serverURL,
} from 'moralis';

const GET_MORALIS = "GET_MORALIS";
const SET_MORALIS = "SET_MORALIS";
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

export function setMoralis() {
  return (dispatch: any) => {
    dispatch({
      type: SET_MORALIS,
      payload: Moralis
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
  GET_MORALIS,
  SET_MORALIS,
  MORALIS_ERROR,
  GET_ETHERS,
  SET_ETHERS,
  GET_USER,
  SET_USER,
  GET_WEB3,
  SET_WEB3,
};
