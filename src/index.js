// App entry point
import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "material-components-web/dist/material-components-web.css";
import "normalize.css";
import "./index.css";
import initStore from "./reducers/store";
import { Provider } from "react-redux";
import App from "./app/App";

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
