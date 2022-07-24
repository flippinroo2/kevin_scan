import { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { Props } from '../interfaces/master';
import { metadataActions, polkadotActions } from '../state/actions';
import { Form, Table } from '../components';

const { setSiteTitle } = metadataActions;
const { setApi } = polkadotActions;

interface DispatchToProps { setApi: Dispatch<any>; setSiteTitle: Dispatch<any>; };
type ScannerProps = Props & DispatchToProps;

const BlockScanner = (props: ScannerProps) => {
  useEffect(() => {
    // props.setApi();
    props.setSiteTitle("Kevin Scan");
  });

  return (
    <>
      <Form />
      <Table />
    </>
  );
};

BlockScanner.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
  return {
    setApi: (data) => {
      dispatch(setApi(data));
    },
    setSiteTitle: (data) => {
      dispatch(
        setSiteTitle(data))
    },
  };
};

export default connect<any, any, any>(null, mapDispatchToProps)(BlockScanner);
