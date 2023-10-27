import { Dispatch } from 'react-redux/node_modules/@types/react';

export type loadingProps = {
    loading?: boolean,
    percentLoaded?: number,
}
export type loadingState = { loadingReducers?: loadingProps }
export type loadingFunctions = {
    setLoading: Dispatch<any>;
    setLoaded: Dispatch<any>;
    setPercentLoaded: Dispatch<any>;
    getPercentLoaded: Dispatch<any>;
}
