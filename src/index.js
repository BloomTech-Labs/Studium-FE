import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { theme } from './utilities/theme.js';
import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { getStore } from './utilities/getStore.js';

const GlobalStyle = createGlobalStyle`
${ reset }
`;

ReactDOM.render( <ThemeProvider theme={ theme }>
  <Provider store={ getStore() }>
    <GlobalStyle/>
    <Router>
      <App/>
    </Router>
  </Provider>
</ThemeProvider>, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
