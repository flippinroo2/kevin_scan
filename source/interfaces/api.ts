import { Dispatch } from 'react-redux/node_modules/@types/react';

export type apiProps = {
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
    blockchain?: string,
    endpoint?: string,
}

export type apiState = { apiReducers?: apiProps }

export type apiFunctions = {
    getApi: Dispatch<any>;
    setApi: Dispatch<any>;
    getBlockchain: Dispatch<any>;
    setBlockchain: Dispatch<any>;
    getEndpoint: Dispatch<any>;
    setEndpoint: Dispatch<any>;
}

