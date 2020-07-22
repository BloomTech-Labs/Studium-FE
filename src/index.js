import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Security } from '@okta/okta-react'
import { config }  from './utils/oktaConfig'
import { Provider } from "react-redux";
import store from "./redux";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Security { ...config }>
      <App />
      </Security>
    </Router>
  </Provider>,
  document.getElementById("root")
);
