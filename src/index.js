import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Root from "./components/root";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
