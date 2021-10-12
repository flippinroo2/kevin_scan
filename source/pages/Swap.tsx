import { Dispatch, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Props } from '../interfaces';
import { loadingActions, metadataActions, swapActions } from '../state/actions';
import { useMoralis, useMoralisCloudFunction, useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { Button, Image, Input, Skeleton, Statistic, Card, Row, Col, Table, Typography } from 'antd';
import {
    ArrowDownOutlined,
    ClockCircleTwoTone,
    CompassTwoTone,
    DownCircleOutlined,
    SettingTwoTone,
} from '@ant-design/icons';
import { SwapInput } from '../components';

const { setLoading, setLoaded } = loadingActions;
const { getSiteColor, setSiteTitle } = metadataActions;
const { getFromToken, getToToken, setTokens } = swapActions;

var color;

const SwapConfiguration = () => {
    const { logout, user } = useMoralis();

    const settingsClick = () => {
        console.log(user);
    }
    const timeClick = () => {
        logout();
    }

    return (
        <div className="swap_content__configuration">
            <Button className="swap_content__settings" icon={<SettingTwoTone twoToneColor="#0fd9e9" />} onClick={settingsClick} />
            <Button className="swap_content__time" icon={<ClockCircleTwoTone twoToneColor="#0fd9e9" />} onClick={timeClick} />
        </div>
    );
}

interface DispatchToProps { getFromToken: any; getSiteColor: any; getToToken: any; setLoading: any; setLoaded: any; setSiteTitle: any; setTokens: Dispatch<any>; };
type SwapProps = Props & DispatchToProps;

const Swap = (props: SwapProps) => {
    const { auth, authenticate, enableWeb3, isAuthenticated, isAuthenticating, isWeb3Enabled, isWeb3EnableLoading, Moralis, user, web3, web3EnableError } = useMoralis();
    const moralis: any = Moralis; // Did this to avoid error with the "Plugins" directive. (ALSO, plugins may not be enabled on the older version I'm using >.<)
    const moralisWeb3 = useMoralisWeb3Api();
    var dex: any;
    const network = "polygon";
    // const moralisWeb3Call = useMoralisWeb3ApiCall(); // Handles the async part of the web3 functions.
    const actionText = isAuthenticated ? "Swap" : "Connect";
    const { Search } = Input;
    const { Paragraph, Title, Text } = Typography;
    const columnProps = {};
    // const authenticationStatus = authenticate();

    useEffect(() => {
        props.setSiteTitle();
        // props.setLoading();
        color = props.getSiteColor();
        try {
            (initalizeDex)();
            console.log("DEX Initialized");
        } catch (err) {
            alert(err);
        }
    }, []);

    const initalizeDex = async () => {
        await moralis.initPlugins();
        dex = await moralis.Plugins.oneInch;
        await getAvailableTokens(network);
    }

    const getAvailableTokens = async (blockchain: string) => {
        let tokenArray: {}[] = [];
        let NATIVE_ADDRESS; // The first token in the "Object.values" array is also the native token for the specified blockchain.
        const USDC_ADDRESS = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
        const supportedTokens = await dex.getSupportedTokens({ chain: blockchain });
        // const optimisimTokens = await oneInch.getSupportedTokens({ chain: "optimism" }); // They will most likely add support for this later.
        for (const entry of Object.entries(supportedTokens.tokens)) {
            const [address, tokenData]: [string, any] = entry;
            const { decimals, logoURI, name, symbol } = tokenData;
            const price = await dex.quote({
                chain: "polygon",
                fromTokenAddress: USDC_ADDRESS,
                toTokenAddress: address,
                amount: 1,
            });
            tokenArray.push({
                name,
                symbol,
                decimals,
                image: logoURI,
                price: price.toTokenAmount,
            });
            // console.log(`${name}:${symbol} has ${decimals} decimals.`);
        }
        props.setTokens(tokenArray);
        console.log("Tokens Loaded");
    }

    const swapTokens = (blockchain: string) => {
        const NATIVE_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
        const ONEINCH_ADDRESS = "0x111111111117dc0aa78b770fa6a738034120c302";
        const USDC_ADDRESS = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
        const FROM_TOKEN = props.getFromToken();
        const TO_TOKEN = props.getToToken();
        const options = {
            chain: blockchain,
            fromTokenAddress: NATIVE_ADDRESS,
            toTokenAddress: ONEINCH_ADDRESS,
            amount: Number(moralis.Units.ETH("0.01")),
            fromAddress: moralis.User.current().get("ethAddress"),
            slippage: 1,
        };

        // const receipt = await oneInch.swap(options);
    }

    const swapButtonAction = async () => {
        if (isAuthenticated) {
            await swapTokens(network);
            return null;
        }
        await authenticate();
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
                            <Button type="primary" block onClick={swapButtonAction}>{actionText}</Button>
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
        getFromToken: () => {
            dispatch(getFromToken())
        },
        getSiteColor: () => {
            dispatch(getSiteColor())
        },
        getToToken: () => {
            dispatch(getToToken())
        },
        setLoading: () => {
            dispatch(setLoading())
        },
        setTokens: (data) => {
            dispatch(setTokens(data))
        },
        setLoaded: () => {
            dispatch(setLoaded())
        },
        setSiteTitle: () => {
            dispatch(setSiteTitle("Loy Swap"))
        },
    };
};

export default connect<any, any, any>(null, mapDispatchToProps)(Swap);
