import React, {useContext, useEffect} from "react";
import firebase from "../config/firebase/FirebaseConfig.js";
import {signedIn, signOut} from "../actions";
import {useAppHooks} from "./useAppHooks.js";
import {useHistory} from "react-router-dom";

/**
 * Use Auth State Change
 * @category Custom Hooks
 *
 * @description Calls actions to log user in or out depending on their
 * google auth state change.
 *
 */
export const useAuthStateChange = () => {
  
  const {changePath, dispatch, history, path} = useAppHooks("Use Auth State");
  
  //Promises. This function gets called in for google sign in;
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      /**
       * @type {User}
       */
      if(user){
        
        dispatch(signedIn(user));
        if(path === "/signin" || path === "/signup" || path ===
          "/"){
          changePath("/dashboard");
        }
      }else{
        dispatch(signOut());
      }
    });
  }, []);
  
};