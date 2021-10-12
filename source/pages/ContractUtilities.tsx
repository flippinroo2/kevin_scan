import { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { Props } from '../interfaces';
import { metadataActions } from '../state/actions';
import { Contract } from '../components';

const { setSiteTitle } = metadataActions;

interface DispatchToProps { setSiteTitle: Dispatch<any>; };
type ContractProps = Props & DispatchToProps;

const ContractUtilities = (props: ContractProps) => {
    useEffect(() => {
        props.setSiteTitle("Kevin Test");
    });

    return (
        <Contract />
    );
};


const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
    return {
        setSiteTitle: () => {
            dispatch(
                setSiteTitle("Kevin Test"))
        },
    };
};

export default connect<any, any, any>(null, mapDispatchToProps)(ContractUtilities);
