import React from "react";
import ReactDOM from "react-dom";

// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

// redux thunk
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
