import { Dispatch, useEffect } from 'react';
import { connect } from 'react-redux';
import { Props } from '../interfaces/master';
import { metadataActions } from '../state/actions';
import { useMoralis, useMoralisCloudFunction, useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { Button, Image, Input, Skeleton, Statistic, Card, Row, Col, Table, Typography } from 'antd';
import {
    ArrowDownOutlined,
    ClockCircleOutlined,
    ClockCircleTwoTone,
    CompassTwoTone,
    DownCircleOutlined,
    SettingTwoTone,
} from '@ant-design/icons';
import { SwapInput } from '../components';

const { getSiteColor, setSiteTitle } = metadataActions;

const settingsClick = () => { console.log("settingsClick()"); }
const timeClick = () => { console.log("timeClick()"); }

var color;

const SwapConfiguration = () => {
    return (
        <div className="swap_content__configuration">
            <Button className="swap_content__settings" icon={<SettingTwoTone twoToneColor="#0fd9e9" />} onClick={settingsClick} />
            <Button className="swap_content__time" icon={<ClockCircleTwoTone twoToneColor="#0fd9e9" />} onClick={timeClick} />
        </div>
    );
}

interface DispatchToProps { getSiteColor: any; setSiteTitle: Dispatch<any>; };
type SwapProps = Props & DispatchToProps;

const Swap = (props: SwapProps) => {
    const { auth, authenticate, enableWeb3, isAuthenticated, isAuthenticating, isWeb3Enabled, isWeb3EnableLoading, login, logout, Moralis, signup, user, web3, web3EnableError } = useMoralis();
    const moralis: any = Moralis; // Did this to avoid error with the "Plugins" directive. (ALSO, plugins may not be enabled on the older version I'm using >.<)
    const moralisWeb3 = useMoralisWeb3Api();
    // const moralisWeb3Call = useMoralisWeb3ApiCall(); // Handles the async part of the web3 functions.
    const { Search } = Input;
    const { Paragraph, Title, Text } = Typography;
    const columnProps = {};
    // const authenticationStatus = authenticate();


    // console.log(moralis.Plugins.web3api.token.getAllTokenIds());
    // const { data } = useMoralisWeb3ApiCall(moralisWeb3.token.getAllTokenIds);

    useEffect(() => {
        props.setSiteTitle("Kevin Swap");
        color = props.getSiteColor();
        // console.log(data);
        console.log("BREAK");
    }); // This is called each time the component is rendered.

    var err: any; // TODO: Fix "any" type. Code wasn't on type Error.
    var errorCode: number;
    switch (auth.state) {
        case "error":
            err = auth.error;
            errorCode = err.code;
            console.dir(err);
            if (errorCode == 101) {
                console.log("Invalid Username / Password");
                signup("testUsername", "testPassword", "test@email.com");
                break;
            }
            if (errorCode = 202) {
                console.log("This username is taken");
                break;
            }
        case "authenticating":
            console.log("authenticating");
            break;
        case "authenticated":
            console.log("authenticated");
            break;
        case "logging_out":
            console.log("logging_out");
            break;
        case "unauthenticated":
            console.log("unauthenticated");
            // const authenticationStatus = authenticate({ onComplete: () => { alert("Authenticated"); }, provider: "walletconnect" }); // Requires Metamask or another Web3 Provider. You can also pass in "walletconnect" to the "provider" argument to use that instead of Metamask.
            const loginTest = login("testUsername", "testPassword");
            // const signUpTest = signup("testUsername", "testPassword", "test@email.com");
            break;
        default:
            err = auth.error;
            console.log("default");
    }

    return (
        <>
            <Row className="swap_mode" align="middle" justify="center">
                <Col className="swap_mode__exchange" {...columnProps} xs={12}>
                    <Button type="primary" block>Exchange</Button>
                </Col>
                <Col className="swap_mode__liquidity" {...columnProps} xs={12}>
                    <Button type="default" block>Liquidity</Button>
                </Col>
            </Row>
            <Row className="swap_content" align="middle" justify="center">
                <Col xs={24}>
                    <Card className="swap_content__card" title={<Card.Meta title="Exchange" description="Trade tokens in an instant" />} extra={<SwapConfiguration />}>
                        <Row className="swap_content__input" align="middle" justify="center">
                            <SwapInput type="primary" />
                        </Row>
                        <Row className="swap_content__control" align="middle" justify="center">
                            <Button type="primary" icon={<ArrowDownOutlined />} />
                        </Row>
                        <Row className="swap_content__input" align="middle" justify="center">
                            <SwapInput type="secondary" />
                        </Row>
                        <Row className="swap_content__action" align="middle" justify="center">
                            <Button type="primary" block onClick={() => { logout(); }}>Unlock Wallet</Button>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

// Swap.defaultProps = {};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
    return {
        getSiteColor: () => {
            dispatch(getSiteColor())
        },
        setSiteTitle: () => {
            dispatch(
                setSiteTitle("Kevin Swap"))
        },
    };
};

export default connect<any, any, any>(null, mapDispatchToProps)(Swap);
