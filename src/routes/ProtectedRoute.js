import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ( { component: Component, ...rest } ) => {
  
  return ( <Route
    { ...rest }
    render={ props => {
      return localStorage.getItem( 'loggedIn' ) !== 'true' ||
      ( localStorage.getItem( 'loggedIn' ) === 'true' &&
        localStorage.getItem( 'userRegistered' ) === 'true' ) ?
        <Component { ...props }/> : <Redirect to={ '/register' }/>;
    } }
  /> );
};

export default ProtectedRoute;