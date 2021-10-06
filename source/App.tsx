import { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  // StaticRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Props, State } from './interfaces/master';

import { apiActions, loadingActions, metadataActions, web3Actions } from './state/actions';

import { Layout } from 'antd';

import { BlockScanner, ContractUtilities, NftViewer, Swap, Temp } from './pages';
import { Footer, Header, Loader, Navigation } from './components';

const { setApi } = apiActions;
const { setLoaded, setPercentLoaded } = loadingActions;
const { getMoralis, setMoralis } = web3Actions;

interface DispatchToProps { setApi: Dispatch<any>; setLoaded: Dispatch<any>; getMoralis: any; setMoralis: any; setPercentLoaded: Dispatch<any> };
type AppProps = Props & DispatchToProps;
type AppState = { api?: {}, blockchain?: string, color?: string, currency?: string, endpoint?: string, loading?: boolean, moralis?: {}, percentLoaded?: number };

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    // TODO: Clean up state bindings. We can use props for most use cases.
    const { api, blockchain, color, currency, endpoint, loading, moralis, percentLoaded } = props;
    this.state = { api, blockchain, color, currency, endpoint, loading, moralis, percentLoaded };
  }

  componentDidMount() {
    this.props.setApi(this.state.endpoint);
    this.props.setMoralis();
    this.props.setPercentLoaded(50);
  }

  render() {
    const { percentLoaded } = this.props;
    const { Content, Sider } = Layout;
    const siteLayout = { minHeight: '100vh' };
    // TODO: Add all the variables below to Redux store.
    const showHeader = true;
    const showMenu = true;
    const showFooter = true;
    // TODO: Use Code Splitting to prevent needing to load entire application. (https://reactrouter.com/web/guides/code-splitting)
    return (
      <Layout className="site_layout" style={siteLayout}>
        {showHeader ? (<Header />) : null}
        <Router>
          <Layout>
            {showMenu ? (
              <Sider className="site_menu" hidden>
                <Navigation />
              </Sider>
            ) : null}
            <Content>
              {percentLoaded! < 50 ? (
                <Loader />
              ) : (
                <Switch>
                  <Route path="/" exact>
                    <Temp title="Kevin Scan" />
                  </ Route>
                  <Route path="/kevin_scan" exact>
                    <BlockScanner />
                  </ Route>
                  <Route path="/loy_swap" exact>
                    <Swap />
                  </ Route>
                  <Route path="/kevin_view" exact>
                    {/* <NftViewer /> */}
                    <Temp title="Kevin View" />
                  </ Route>
                  <Route path="/kevin_test" exact>
                    {/* <ContractUtilities /> */}
                    <Temp title="Kevin Test" />
                  </ Route>
                </Switch>
              )}
            </Content>
          </Layout>
        </Router>
        {showFooter ? (<Footer />) : null}
      </Layout>
    );
  }
}

const mapStateToProps = (state: State): Props => {
  const { apiReducers = {}, loadingReducers = {}, polkadotReducers = {}, web3Reducers = {}, } = state;
  return {
    api: apiReducers.api,
    blockchain: apiReducers.blockchain,
    currency: polkadotReducers.currency,
    endpoint: polkadotReducers.endpoint,
    loading: loadingReducers.loading,
    moralis: web3Reducers.moralis,
    percentLoaded: loadingReducers.percentLoaded,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
  return {
    setApi: (data: string) => {
      dispatch(setApi(data));
    },
    setLoaded: () => {
      dispatch(setLoaded());
    },
    getMoralis: () => {
      dispatch(getMoralis());
    },
    setMoralis: () => {
      dispatch(setMoralis());
    },
    setPercentLoaded: (data: number) => {
      dispatch(setPercentLoaded(data));
    },
  };
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(App);
