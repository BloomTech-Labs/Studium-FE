// test-utils.js
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import React from 'react';

const GlobalStyle = createGlobalStyle`
${reset}
`;

const store = createStore(rootReducer);

const theme = {
  lightLightGray: '#D7D7D7',
  lightGray: '#c4c4c4',
  gray: '#C4C4C4',
  darkGray: '#585858',
  darkDarkGray: '#3a3a3a',

  largeRadius: 14,
  smallRadius: 6,

  navBarTopHeight: 75,
  footerHeight: 50,

  screenHeight: window.innerHeight,
  screenWidth: window.outerWidth,
};

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        {children}
      </Provider>
    </ThemeProvider>
  );
};

/**
 *
 * @param ui
 * @param options
 * @returns {RenderResult}
 */
const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from '@testing-library/react';

export { customRender as render };
