import { Dispatch } from 'react-redux/node_modules/@types/react';

export type web3Props = {
  moralis?: object,
}
export type web3State = { web3Reducers?: web3Props }
export type web3Functions = {
  getMoralis: Dispatch<any>;
  setMoralis: Dispatch<any>;
}

