import React from "react";
import ReactDOM from "react-dom";
import RouterComponent from "./RouterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./components/Store/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
