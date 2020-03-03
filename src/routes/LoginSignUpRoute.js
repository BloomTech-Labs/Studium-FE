import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/**
 * Login Sing up Route
 * @param Component
 * @param rest
 * @return {*}
 */
export const LoginSignUpRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem('loggedIn') === 'true' ? (
          <Redirect to={'/dashboard'} {...props} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default LoginSignUpRoute;
