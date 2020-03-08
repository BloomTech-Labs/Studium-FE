import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/**
 * Login Sing up Route
 * @category Routes
 * @component
 * @example
 * import {SignIn} from '../views/SignIn.js";
 * return (
 *    <LoginSignUpRoute
 *      path={ '/signIn' }
 *      component={ SignIn }
 *      { ...props }
 *     />
 *  )
 */
export const LoginSignUpRoute = ( { component: Component, ...rest } ) => {
  return (
    <Route
      { ...rest }
      render={ props => {
        return localStorage.getItem( 'loggedIn' ) === 'true' ? (
          <Redirect to={ '/dashboard' } { ...props } />
        ) : (
          <Component { ...props } />
        );
      } }
    />
  );
};

