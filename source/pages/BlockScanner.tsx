import { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { Props } from '../interfaces/master';
import { metadataActions } from '../state/actions';
import { Form, Table } from '../components';

const { setSiteTitle } = metadataActions;

interface DispatchToProps { setSiteTitle: Dispatch<any>; };
type ScannerProps = Props & DispatchToProps;

const BlockScanner = (props: ScannerProps) => {
  useEffect(() => {
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
    setSiteTitle: () => {
      dispatch(
        setSiteTitle("Kevin Scan"))
    },
  };
};

export default connect<any, any, any>(null, mapDispatchToProps)(BlockScanner);
