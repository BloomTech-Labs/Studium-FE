import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
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
