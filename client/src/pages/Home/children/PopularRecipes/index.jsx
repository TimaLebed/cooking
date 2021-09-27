import React, { useState } from "react";

import { Card } from "../../../../shared/Card";
import { Button } from "../../../../shared/Button";
import { PopupRecipes } from "../../../../shared/PopupRecipes";
import {
  RecipesWrapper,
  RecipesContent,
  RecipesSuptitle,
  RecipesTitle,
  CardsContainer,
} from "./index.styled";

export const PopularRecipes = ({ recipes }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);

  const popup = recipes.map((item, index) => {
    if (index === Number(clickedCardId)) {
      return (
        <PopupRecipes
          key={item.id}
          active={popupActive}
          setActive={setPopupActive}
          clickedCard={item}
        ></PopupRecipes>
      );
    }
  });

  const cards = recipes.map((item) => (
    <Card
      key={item.id}
      card={item}
      setPopupActive={setPopupActive}
      setClickedCardId={setClickedCardId}
    ></Card>
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
      {popup}
    </>
  );
};
