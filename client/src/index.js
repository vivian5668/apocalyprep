import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './LocationEnter';

//materialize ui
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// import registerServiceWorker from './registerServiceWorker';
import store from "./store/index";
import { Provider } from "react-redux";
import { unregister as unregisterServiceWorker } from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <App/>
    </MuiThemeProvider>
  </Provider>,
   document.getElementById('root'));
// registerServiceWorker();
unregisterServiceWorker();
