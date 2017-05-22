import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import DevTools from "./DevTools";
import DemoContainer from "./DemoContainer";

const Root = () => (
  <Provider store={store}>
    <div>
      <DevTools />
      <DemoContainer />
    </div>
  </Provider>
);

const node = document.getElementById("root");

render(<Root />, node);
