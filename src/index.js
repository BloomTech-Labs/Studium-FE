import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Security } from "@okta/okta-react";
import { config } from "./utils/oktaConfig";
import { Provider } from "react-redux";
import { store, persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Security {...config}>
          <App />
        </Security>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
