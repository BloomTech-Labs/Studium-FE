import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/*eslint react/prop-types:0*/
export const ProtectedRoute = ({ component: Component, ...rest }) => {
/*eslint no-unused-vars:0*/
  const loggedIn = localStorage.getItem('loggedIn');
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem('loggedIn') === 'true' ? (
          <Component {...props} />
        ) : (
          <Redirect to={'/'} />
        );
      }}
    />
  );
};

export default ProtectedRoute;
