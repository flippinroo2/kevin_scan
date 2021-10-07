import { Dispatch } from 'react-redux/node_modules/@types/react';

export type web3Props = {
  moralis?: object,
  tokens?: object,
  user?: object,
}
export type web3State = { web3Reducers?: web3Props }
export type web3Functions = {
  getMoralis: Dispatch<any>;
  setMoralis: Dispatch<any>;
  getTokens: Dispatch<any>;
  setTokens: Dispatch<any>;
  getUser: Dispatch<any>;
  setUser: Dispatch<any>;
}

