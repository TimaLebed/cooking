import recipeApi from "../../api/RecipeApi";
import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
} from "./recipeTypes";

export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST,
});

export const fetchRecipesSuccess = (recipes) => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes,
});

export const fetchRecipesFailure = (error) => ({
  type: FETCH_RECIPES_FAILURE,
  payload: error,
});

export const fetchRecipes = () => (dispatch) => {
  dispatch(fetchRecipesRequest());
  recipeApi
    .getRecipes()
    .then((data) => dispatch(fetchRecipesSuccess(data)))
    .catch(({ message }) => dispatch(fetchRecipesFailure(message)));
};
