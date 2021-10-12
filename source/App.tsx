import { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  // StaticRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Props, State } from './interfaces';

import { blockchainActions, loadingActions, metadataActions, web3Actions } from './state/actions';

import { Layout } from 'antd';

import { BlockScanner, ContractUtilities, NftViewer, Swap, Temp } from './pages';
import { Footer, Header, Loader, Navigation } from './components';
import metadataReducers from './state/reducers/metadataReducers';

const { setLoaded } = loadingActions;

// const context = useContext(ContractProvider);
// const [contracts, setContracts] = useState([]);

interface DispatchToProps { setLoaded: any; };
type AppProps = Props & DispatchToProps;
type AppState = { color?: string, loading?: boolean, };

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    this.props.setLoaded();
  }

  // componentDidCatch(error, info) {
  //   console.log(error);
  //   console.log(info);
  //   // Display fallback UI
  //   // this.setState({ hasError: true });
  //   // You can also log the error to an error reporting service
  //   // logErrorToMyService(error, info);
  // }

  render() {
    const { loading } = this.props;
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
              {loading ? (
                <Loader />
              ) : (
                <Switch>
                  <Route path="/" exact>
                    <Temp title="Homepage" />
                  </ Route>
                  <Route path="/kevin_scan" exact>
                    <BlockScanner />
                  </ Route>
                  <Route path="/loy_swap" exact>
                    <Swap />
                  </ Route>
                  <Route path="/non_fungible_kevin" exact>
                    {/* <NftViewer /> */}
                    <Temp title="Non Fungible Kevin" />
                  </ Route>
                  <Route path="/kevs_contracts" exact>
                    {/* <ContractUtilities /> */}
                    <Temp title="Kev's Contracts" />
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
  const { metadataReducers = {}, loadingReducers = {} } = state;
  return {
    color: metadataReducers.color,
    loading: loadingReducers.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<(data: string | number) => void>): DispatchToProps => {
  return {
    setLoaded: () => {
      dispatch(setLoaded());
    },
  };
};

export default connect<Props, any, any>(mapStateToProps, mapDispatchToProps)(App);
