import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppProvider from "./utilities/AppProviders.js";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import { SYNAPS_CONFIG } from "./synapsConfig.js";
import {
  logOutMessageOrDebug, createMessage,
} from "./utilities/debugLogger.js";
import { LOG_TYPES } from "./utilities/constants.js";

try{
  if( SYNAPS_CONFIG.appsToDebbug.length > 0 ){
    logOutMessageOrDebug(
      createMessage( "Debug Logger Active", LOG_TYPES.INFO, "App" ) );
    logOutMessageOrDebug( createMessage( "To log debug messages you have to" +
      " add the app location name to the appsToDebug variable in the App" +
      " config file. ", LOG_TYPES.INFO, "App" ) );
  }
}catch( e ){
  logOutMessageOrDebug( createMessage( e.message, LOG_TYPES.ERROR, "APP" ) );
  SYNAPS_CONFIG.debugError = true;
}

ReactDOM.render(
  <AppProvider>
    <App/>
  </AppProvider>
  , document.getElementById( "root" ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
