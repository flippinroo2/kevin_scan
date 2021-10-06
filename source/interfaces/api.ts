import { Dispatch } from 'react-redux/node_modules/@types/react';

export type apiProps = {
    api?: object,
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

