import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { provider } from "react-redux";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
