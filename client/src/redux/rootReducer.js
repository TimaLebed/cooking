import { combineReducers } from "redux";

import bookReducer from "./book/bookReducer";
import recipeReducer from "./recipe/recipeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  recipes: recipeReducer,
  user: userReducer,
});

export default rootReducer;
