import { Dispatch } from 'react-redux/node_modules/@types/react';

export type blockchainProps = {
    blockchain?: string,
    currency?: string,
    endpoint?: string,
}

export type blockchainState = { blockchainReducers?: blockchainProps }

export type blockchainFunctions = {
    getBlockchain: Dispatch<any>;
    setBlockchain: Dispatch<any>;
    setCurrency: Dispatch<any>;
    getCurrency: Dispatch<any>;
    getEndpoint: Dispatch<any>;
    setEndpoint: Dispatch<any>;
}

