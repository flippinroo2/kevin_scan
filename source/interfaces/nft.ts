import { Dispatch } from 'react-redux/node_modules/@types/react';

export type nftProps = {
  nft?: object
}
export type nftState = { nftReducers?: nftState }
export type nftFunctions = {
  getNft: Dispatch<any>;
  setNft: Dispatch<any>;
}
