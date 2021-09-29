import { Dispatch } from "react"

// import blockchain from './blockchain';

export type apiProps = {
    api: object,
    blockchain: string,
    endpoint: string,
}
export type apiState = { apiReducers: { api: object, blockchain: string, endpoint: string } }

export type loadingProps = {
    loading: boolean,
    percentLoaded: boolean,
}
export type loadingState = { loadingReducers: { loading: boolean, percentLoaded: boolean } }

export type polkadotProps = {
    currency: string,
}
export type polkadotState = { polkadotReducers: { currency: string } }

export type tableProps = {
    columns: {}[],
    rows: {}[],
}
export type tableState = { tableReducers: { columns: {}[], rows: {}[] } }

export type BaseProps = apiProps & loadingProps & polkadotProps & tableProps;

export type InitialState = apiState & loadingState & polkadotState & tableState;
export type FullState = BaseProps;

export interface ActionProps {
    setApi: any;
    // setApi: (data: string) => void;
    // setApi: (data: string) => Promise<void>;
    // setApi: (data: string) => (dispatch: any) => Promise<void>;
    setLoaded: () => void;
    setPercentLoaded: (data: number) => void;
}

export type ActionState = {
    setApi: Dispatch<any>;
    setLoaded: Dispatch<any>;
    setPercentLoaded: Dispatch<any>;
}
