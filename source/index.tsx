import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import 'antd/dist/antd.css';
import './styles/App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { ConfigProvider } from 'antd';
// import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ConfigProvider componentSize={'small'} space={{ size: 'large' }}>
        <App />
      </ConfigProvider> */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals();

serviceWorker.unregister();
