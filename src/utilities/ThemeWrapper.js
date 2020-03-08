// styleguide/ThemeWrapper.js
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from './theme.js';
import 'antd/dist/antd.css';
import { getStore } from './getStore.js';

/**
 * Theme Wrapper
 * @category Utilities
 *
 * @description Wrapper component for styleguidest so that the rendered
 * components have access to the theme and to the reducers if they need it.
 */
export default class ThemeWrapper extends Component{
  render(){
    return ( <ThemeProvider theme={ theme }>
      <Provider store={ getStore() }>
        { this.props.children }
      </Provider>
    </ThemeProvider> );
  }
}