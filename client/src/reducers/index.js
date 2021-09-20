import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { cardsReducer } from "./cardsReducer";

export const rootReducer = combineReducers({
  cardsReducer,
  router: routerReducer,
});
