import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';
// import * as reactReduxTypes from '@types/react';
// import { Dispatch } from '@types/react';

import { apiActions, loadingActions } from './state/actions';

import { Layout } from 'antd';
// import styles from './styles/App.module.css';
// console.log(styles);
import './styles/App.css';

import AppHeader from './components/Header.jsx';
import Loader from './components/Loader.jsx';
import DataInput from './components/Form.jsx';
import DataDisplay from './components/Table.jsx';
import AppFooter from './components/Footer.jsx';

import * as types from './interfaces/master';

const { setApi } = apiActions;
const { setLoaded, setPercentLoaded } = loadingActions;

const { Content } = Layout;

interface Props extends types.apiProps, types.loadingProps, types.ActionProps { currency: string };
interface State extends types.InitialState { };

class App extends Component<Props, types.FullState> {
  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromProps(props: Props) {
    const { api, blockchain, endpoint, loading, percentLoaded, currency } =
      props;
    return {
      api,
      blockchain,
      endpoint,
      loading,
      percentLoaded,
      currency,
    };
  }

  componentDidMount() {
    this.props.setApi(this.state.endpoint);
    this.props.setPercentLoaded(50);
  }

  render() {
    const percentLoaded = 100;
    // const { loading, percentLoaded } = this.state;
    const siteLayout = { minHeight: '100vh' };
    return (
      <Layout className="site_layout" style={siteLayout}>
        <AppHeader />
        <Content>
          {percentLoaded < 50 ? (
            <Loader />
          ) : (
            <>
              <DataInput />
              <DataDisplay />
            </>
          )}
        </Content>
        <AppFooter />
      </Layout>
    );
  }
}

const mapStateToProps = (state: any): any => {
  const { apiReducers, loadingReducers, polkadotReducers } = state;
  const { api, blockchain, endpoint } = apiReducers;
  const { loading, percentLoaded } = loadingReducers;
  const { currency } = polkadotReducers;
  return {
    api,
    blockchain,
    endpoint,
    loading,
    percentLoaded,
    currency,
  };
};

// Should be Dispatch<ActionState>, however, I'm having issues with the function types.
const mapDispatchToProps = (dispatch: Dispatch<any>): types.ActionProps => {
  return {
    setApi: (data: string) => {
      dispatch(setApi(data));
    },
    setLoaded: () => {
      dispatch(setLoaded());
    },
    setPercentLoaded: (data: number) => {
      dispatch(setPercentLoaded(data));
    },
  };
};

export default connect<Props, types.ActionProps>(mapStateToProps, mapDispatchToProps)(App);
