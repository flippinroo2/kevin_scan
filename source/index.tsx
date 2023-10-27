import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import './styles/customTheme.css';
// import styles from './styles/App.module.css';
// console.log(styles);
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import { MoralisProvider } from 'react-moralis';
// import reportWebVitals from 'reportWebVitals';

const MORALIS_APP_ID: string = "sfMziYaXxVpWtGjBhPYTPwWM5AFLEsQEzgQaCdas";
const MORALIS_SERVER_URL: string = "https://owadnccfz4uh.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
        <ConfigProvider componentSize={'small'} space={{ size: 'large' }}>
          <App />
        </ConfigProvider>
        {/* <App /> */}
      </MoralisProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals();

serviceWorker.unregister();
