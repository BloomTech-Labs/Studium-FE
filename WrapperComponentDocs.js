// wrapper-component.js
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useThemeContext } from './src/customHooks/useThemeContext.js';
import { StyleSheetManager } from 'styled-components';
import { getStore } from './src/utilities/getStore.js';

const WrapperComponentDocs = ( props ) => {
  const { frameContext } = props;
  return (
    <div>
      <head></head>
      <ThemeProvider theme={ useThemeContext }>
        <StyleSheetManager target={ frameContext.document.head }>
          <Provider store={ getStore() }>
            { props.children }
          </Provider>
        </StyleSheetManager>
      </ThemeProvider>
    </div>
  
  );
};

export default WrapperComponentDocs;