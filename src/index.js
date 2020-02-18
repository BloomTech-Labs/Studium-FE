import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${ reset }
`;

const theme = {
  mainColor: '#c4c4c4',
  darkGray: '#585858',
  color: 'blue',
  largeRadius: '14px',
  smallRadius: '6px',
  gray: 'gray',
};

const store = createStore( rootReducer, applyMiddleware( thunk ) );

ReactDOM.render( <ThemeProvider theme={ theme }>
  <Provider store={ store }>
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
