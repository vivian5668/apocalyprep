import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import store from "./store/index";
import { Provider } from "react-redux";

import { unregister as unregisterServiceWorker } from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
// registerServiceWorker();
unregisterServiceWorker();
