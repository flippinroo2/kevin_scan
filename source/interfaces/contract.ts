import { Dispatch } from 'react-redux/node_modules/@types/react';

export type contractProps = {
  contract?: object
}
export type contractState = { contractReducers?: contractProps }
export type contractFunctions = {
  getContract: Dispatch<any>;
  setContract: Dispatch<any>;
}
