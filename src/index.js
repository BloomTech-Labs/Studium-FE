import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import AppProvider from "./utilities/AppProviders.js";
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import {SYNAPS_CONFIG} from "./synapsConfig.js";
import appLogger from "./utilities/oldConsole.js";

const logger = appLogger.getLogger("App");

try{
  if(SYNAPS_CONFIG.appsToDebbug.length > 0){
    logger.logInfo("Debug Logger Active");
    logger.logInfo("To log debug messages you have to" +
      " add the app location name to the appsToDebug variable in the App" +
      " config file. ");
  }
}catch(e){
  logger.error(e.message);
  SYNAPS_CONFIG.debugError = true;
}

ReactDOM.render(
  <Router>
    <AppProvider appLogger={appLogger}>
      <App logger={logger}/>
    </AppProvider>
  </Router>
  , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
