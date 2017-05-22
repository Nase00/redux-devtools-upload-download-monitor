import { createStore, composeStore, applyMiddleware, compose } from "redux";
import { persistState } from "redux-devtools";
import rootReducer from "./demoRedux";
import DevTools from "./DevTools";

const enhancers = compose(
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&#]+)\b/))
);

export default compose(enhancers)(createStore)(rootReducer);
