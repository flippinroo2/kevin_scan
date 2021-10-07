import { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { Props } from '../interfaces/master';
import { metadataActions } from '../state/actions';
import { NFT } from '../components';

const { setSiteTitle } = metadataActions;

interface DispatchToProps { setSiteTitle: Dispatch<any>; };
type NFTProps = Props & DispatchToProps;

const NftViewer = (props: NFTProps) => {
    useEffect(() => {
        props.setSiteTitle("Kevin View");
    });

    return (
        <NFT />
    );
};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
    return {
        setSiteTitle: () => {
            dispatch(
                setSiteTitle("Kevin View"))
        },
    };
};

export default connect<any, any, any>(null, mapDispatchToProps)(NftViewer);
