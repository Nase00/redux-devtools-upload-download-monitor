import { combineReducers } from "redux";

import { DEFAULT_VALUE } from "./constants";

const EMIT_INPUT_UPDATE = "EMIT_INPUT_UPDATE";

export const emitInputUpdate = value => ({
  type: EMIT_INPUT_UPDATE,
  value
});

const initialState = {
  value: DEFAULT_VALUE
};

const reducer = (state = initialState, action) => {
  const handlers = {
    [EMIT_INPUT_UPDATE]: () => ({
      ...state,
      value: action.value
    })
  };

  return handlers[action.type] ? handlers[action.type]() : state;
};

export default reducer;
