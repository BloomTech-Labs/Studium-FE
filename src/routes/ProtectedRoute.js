import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useAppHooks} from "../customHooks/useAppHooks.js";

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
export const ProtectedRoute = ({component: Component, ...rest}) => {
  const {usersState} = rest.getHooks("ProtectedRoute");
  
  return (
    <Route
      {...rest}
      render={props => {
        try{
          if(usersState.user.uid){
            return <Component {...rest} />;
          }else{
            return <Redirect to={"/"}/>;
          }
        }catch(e){
          return <Redirect to={"/"}/>;
        }
      }}
    />
  );
};
