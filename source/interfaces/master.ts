import * as Api from './api';
import * as Loading from './loading';
import * as Metadata from './metadata';
import * as Polkadot from './polkadot';
import * as Table from './table';
import * as Web3 from './web3';

export * from './api';
export * from './loading';
export * from './metadata';
export * from './polkadot';
export * from './table';
export * from './web3';

export type Actions = Api.apiFunctions & Loading.loadingFunctions & Metadata.metadataFunctions & Polkadot.polkadotFunctions & Table.tableFunctions & Web3.web3Functions;

export type Props = Api.apiProps & Loading.loadingProps & Metadata.metadataProps & Polkadot.polkadotProps & Table.tableProps & Web3.web3Props;
export type FullProps = Props & Actions;

export type State = Api.apiState & Loading.loadingState & Metadata.metadataState & Polkadot.polkadotState & Table.tableState & Web3.web3State;
export type FullState = Api.apiState & Loading.loadingState & Metadata.metadataState & Polkadot.polkadotState & Table.tableState & Web3.web3State & Actions;
