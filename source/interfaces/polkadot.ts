import { Dispatch } from 'react-redux/node_modules/@types/react';

export type childDataProps = {
    block?: any,
    createdAtHash?: any,
    extrinsic?: any,
    hash?: number[],
    registry?: any,
}

export type blockProps = {
    endBlock?: number,
    genesisBlock?: number,
    lastBlock?: number,
    lastFinalizedBlock?: number,
    startBlock?: number,
}

export type polkadotProps = {
    block?: blockProps,
    currency?: string,
    endpoint?: string,
}

export type polkadotState = {
    polkadotReducers?: polkadotProps,
}

export type polkadotFunctions = {
    setCurrency: Dispatch<any>;
    getCurrency: Dispatch<any>;
    getEndpoint: Dispatch<any>;
    setEndpoint: Dispatch<any>;
    setGenesisBlock: Dispatch<any>;
    getGenesisBlock: Dispatch<any>;
    setCurrentBlock: Dispatch<any>;
    getCurrentBlock: Dispatch<any>;
    setLastBlock: Dispatch<any>;
    getLastBlock: Dispatch<any>;
    setLastFinalizedBlock: Dispatch<any>;
    getLastFinalizedBlock: Dispatch<any>;
    setBlockHash: Dispatch<any>;
    getBlockHash: Dispatch<any>;
    setBlockNumber: Dispatch<any>;
    getBlockNumber: Dispatch<any>;
}



