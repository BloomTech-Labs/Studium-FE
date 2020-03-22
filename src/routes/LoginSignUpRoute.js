import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useAppHooks} from "../customHooks/useAppHooks.js";

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
export const LoginSignUpRoute = ({component: Component, ...rest}) => {
  const {usersState} = useAppHooks("LoginSignUpRoute");
  return (
    <Route
      {...rest}
      render={props => {
        try{
          if(usersState.user.uid){
            return <Redirect to={"/dashboard"} {...props} />;
          }else{
            return <Component {...props} />;
          }
        }catch(e){
          return <Component {...props} />;
        }
      }}
    />
  );
};

