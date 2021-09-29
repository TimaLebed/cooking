import recipeApi from "../../api/RecipeApi";
import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
} from "./recipeTypes";

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch(fetchRecipesRequest());
    recipeApi
      .getRecipes()
      .then((data) => dispatch(fetchRecipesSuccess(data)))
      .catch(({ message }) => dispatch(fetchRecipesFailure(message)));
  };
};

export const fetchRecipesRequest = () => {
  return {
    type: FETCH_RECIPES_REQUEST,
  };
};

export const fetchRecipesSuccess = (recipes) => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes,
  };
};

export const fetchRecipesFailure = (error) => {
  return {
    type: FETCH_RECIPES_FAILURE,
    payload: error,
  };
};
