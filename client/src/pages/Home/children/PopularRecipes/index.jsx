import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "../../../../shared/Card";
import Button from "../../../../shared/Button";
import PopupRecipes from "../../../../shared/PopupRecipes";
import {
  RecipesWrapper,
  RecipesContent,
  RecipesSuptitle,
  RecipesTitle,
  CardsContainer,
} from "./index.styled";

const PopularRecipes = ({ recipes }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);

  const recipe = recipes.find((_, index) => index === Number(clickedCardId));

  const cards = recipes.map((item) => (
    <Card
      key={item.id}
      card={item}
      setPopupActive={setPopupActive}
      setClickedCardId={setClickedCardId}
    />
  ));

  return (
    <>
      <RecipesWrapper>
        <RecipesContent>
          <RecipesSuptitle>users choice</RecipesSuptitle>
          <RecipesTitle>20 Highest-Rated Recipes</RecipesTitle>
          <CardsContainer>{cards}</CardsContainer>
          <Button>Show More</Button>
        </RecipesContent>
      </RecipesWrapper>
      <PopupRecipes
        // key={recipe.id}
        active={popupActive}
        setActive={setPopupActive}
        clickedCard={recipe}
      />
    </>
  );
};

PopularRecipes.propTypes = {
  recipes: PropTypes.array,
};

PopularRecipes.defaultProps = {
  recipes: [],
};

export default PopularRecipes;
