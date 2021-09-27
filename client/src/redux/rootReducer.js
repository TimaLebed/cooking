import { combineReducers } from "redux";
import bookReducer from "./book/bookReducer";
import recipeReducer from "./recipe/recipeReducer";

const rootReducer = combineReducers({
  books: bookReducer,
  recipes: recipeReducer,
});

export default rootReducer;
