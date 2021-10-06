import { Dispatch } from 'react-redux/node_modules/@types/react';

export type metadataProps = {
  color?: string,
  title?: string,
}
export type metadataState = { metadataReducers?: metadataProps }
export type metadataFunctions = {
  setColor: Dispatch<any>;
  getColor: Dispatch<any>;
  setTitle: Dispatch<any>;
  getTitle: Dispatch<any>;
}
