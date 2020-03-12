import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import {getStore} from './getStore.js';
import Cookies from 'universal-cookie';
import {getGlobalStyles} from './getGlobalStyles.js';
import {useThemeContext} from '../customHooks/useThemeContext.js';
import {BrowserRouter as Router} from 'react-router-dom';
const cookies = new Cookies();
export const store = getStore();
const GlobalStyles = getGlobalStyles();

/**
 * App Providers
 * @category Utilities
 *
 * @description Store and theme provider setup for our application.
 */
const AppProvider = props => {
  useEffect(() => {
    const allCookies = cookies.getAll();
    if (Object.keys(allCookies).length > 0) {
      Object.keys(allCookies).forEach(key => {
        store.dispatch({
          type: 'SET_INIT_STATE',
          payload: {name: key, value: cookies[key]},
        });
      });
    }
  }, []);

  const theme = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <Router>{props.children}</Router>
      </Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
