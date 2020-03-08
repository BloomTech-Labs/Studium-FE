import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/**
 * Protected Route
 * @category Routes
 * @component
 * @example
 * import {Dashboard} from '../views/Dashboard.js";
 * return (
 *    <ProtectedRoute
 *      path={ '/dashboard' }
 *      component={ Dashboard }
 *      { ...props }
 *     />
 *  )
 */
export const ProtectedRoute = ( { component: Component, ...rest } ) => {
  
  const loggedIn = localStorage.getItem( 'loggedIn' );
  return (
    <Route
      { ...rest }
      render={ props => {
        return localStorage.getItem( 'loggedIn' ) === 'true' ? (
          <Component { ...props } />
        ) : (
          <Redirect to={ '/' }/>
        );
      } }
    />
  );
};

