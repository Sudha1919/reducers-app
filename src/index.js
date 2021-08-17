import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const reduxStore = createStore(reducermain);

ReactDOM.render(<Provider store={}>
  <App />
  </Provider>, document.getElementById("root"));
