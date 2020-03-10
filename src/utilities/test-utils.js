import React from 'react';
import { render } from '@testing-library/react';
import AppProvider, { store } from './AppProviders.js';

/**
 * Custom Render
 * @category Utilities
 *
 * @description Custom render function to wrap our components with provides
 * they need for testing purposes.
 *
 * @param ui
 * @param options
 * @return {CustomRenderResults}
 *
 */
export const customRender = ( ui, options ) => render( ui, {
  wrapper: AppProvider, ...options,
} );

/**
 * Get Child Nodes
 * @category Utilities
 *
 * @description Gets all the child nodes from a HtmlElment for react testing
 * library.
 *
 * @param {HTMLElement} c
 * @return {HTMLElement[]}
 */
export const getChildNodes = c => {
  console.log( 'inside of get next node.' );
  const childNodes = [];
  if( c.hasChildNodes() ){
    c.childNodes.forEach( child => {
      childNodes.push( child );
    } );
  }
  return childNodes;
};

/**
 * Get Nodes By Node Type
 * @category Utilities
 *
 * @description Returns all the child HtmlElements that are of the requested
 * type.
 *
 * @param {HTMLElement} c
 * @param {string} type
 * @return {HTMLElement[]}
 */
export const getNodesByType = ( c, type ) => {
  const stack = [];
  const toReturn = [];
  stack.push( c );
  while( stack.length > 0 ){
    let node = stack.pop();
    if( node.hasChildNodes() ){
      node.childNodes.forEach( child => {
        stack.push( child );
      } );
    }
    if( node.nodeName === type.toUpperCase() ){
      toReturn.push( node );
    }
  }
  
  return toReturn;
};

export * from '@testing-library/react';

export { store };

/**
 * @typedef {object} CustomRenderResults
 * @property {HTMLDivElement} container
 * @property {HTMLBodyElement} baseElement
 * @property {function} debug
 * @property {function} unmount
 * @property {function} rerender
 * @property {function} asFragment
 * @property {function} queryAllByLabelText
 * @property {function} getAllByLabelText
 * @property {function} queryByLabelText
 * @property {function} getAllByLabelText
 * @property {function} queryByLabelText
 * @property {function} getByLabelText
 * @property {function} findAllByLabelText
 * @property {function} findByLabelText
 * @property {function} queryByPlaceholderText
 * @property {function} queryAllByPlaceholderText
 * @property {function} getByPlaceholderText
 * @property {function} getAllByPlaceholderText
 * @property {function} findAllByPlaceholderText
 * @property {function} findByPlaceholderText
 * @property {function} queryAllByText
 * @property {function} queryByText
 * @property {function} getByText
 * @property {function} getAllByText
 * @property {function} findAllByText
 * @property {function} findByText
 * @property {function} queryAllByDisplayValue
 * @property {function} queryByDisplayValue
 * @property {function} getByDisplayValue
 * @property {function} getAllByDisplayValue
 * @property {function} findAllByDisplayValue
 * @property {function} findByDisplayValue
 * @property {function} queryAllByAltText
 * @property {function} queryByAltText
 * @property {function} getByAltText
 * @property {function} getAllByAltText
 * @property {function} findAllByAltText
 * @property {function} findByAltText
 * @property {function} queryAllByTitle
 * @property {function} queryByTitle
 * @property {function} getByTitle
 * @property {function} getAllByTitle
 * @property {function} findAllByTitle
 * @property {function} findByTitle
 * @property {function} queryAllByRole
 * @property {function} queryByRole
 * @property {function} getAllByRole
 * @property {function} getByRole
 * @property {function} findAllByRole
 * @property {function} findByRole
 * @property {function} queryByTestId
 * @property {function} queryAllByTestId
 * @property {function} getByTestId
 * @property {function} getAllByTestId
 * @property {function} findAllByTestId
 * @property {function} findByTestId
 */