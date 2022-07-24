import * as Blockchain from './blockchain';
import * as Loading from './loading';
import * as Metadata from './metadata';
import * as Polkadot from './polkadot';
import * as Table from './table';
import * as Web3 from './web3';

export * from './blockchain';
export * from './loading';
export * from './metadata';
export * from './polkadot';
export * from './table';
export * from './web3';

export type Actions = Blockchain.blockchainFunctions & Loading.loadingFunctions & Metadata.metadataFunctions & Polkadot.polkadotFunctions & Table.tableFunctions & Web3.web3Functions;

export type Props = Blockchain.blockchainProps & Loading.loadingProps & Metadata.metadataProps & Polkadot.polkadotProps & Table.tableProps & Web3.web3Props;
export type FullProps = Props & Actions;

export type State = Blockchain.blockchainState & Loading.loadingState & Metadata.metadataState & Polkadot.polkadotState & Table.tableState & Web3.web3State;
export type FullState = Blockchain.blockchainState & Loading.loadingState & Metadata.metadataState & Polkadot.polkadotState & Table.tableState & Web3.web3State & Actions;
