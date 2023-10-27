import { Dispatch } from 'react-redux/node_modules/@types/react';

export type tableProps = {
    columns?: {}[],
    rows?: {}[],
}
export type tableState = { tableReducers?: tableProps }
export type tableFunctions = {
    addColumns: Dispatch<any>;
    setColumns: Dispatch<any>;
    addRow: Dispatch<any>;
    addRows: Dispatch<any>;
    clearTable: Dispatch<any>;
}

