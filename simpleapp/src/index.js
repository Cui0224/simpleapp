import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import './css/reset.css'
import "antd-mobile/dist/antd-mobile.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./store/index";
import "react-indexlist/dist/index.css";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />,
    </Router>
  </Provider>,
  document.getElementById("root")
);
