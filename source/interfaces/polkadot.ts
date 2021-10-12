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
    api?: {
        derive?: {
            chain?: {}
        },
        query?: {
            system?: {
                events?: {
                    at: (hash: number[]) => {}
                }
            },
            timestamp?: {
                now: () => { words: string }
            }
        },
        rpc?: {
            chain?: {
                getBlock: (hash: number[]) => {},
                // parseInt(blockData.block.header.number.toString());
                getBlockHash: (blockNumber: number) => number[]
                getHeader: (hash: number[]) => { author?: string },
            }
        },
        type?: string
    },
    block?: blockProps,
    endpoint?: string,
}

export type polkadotState = {
    polkadotReducers?: polkadotProps,
}

export type polkadotFunctions = {
    getApi: Dispatch<any>;
    setApi: Dispatch<any>;
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



