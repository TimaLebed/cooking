import React from "react";

import { Card } from "../../../../shared/Card";
import { Button } from "../../../../shared/Button";
import {
  RecipesWrapper,
  RecipesContent,
  RecipesSuptitle,
  RecipesTitle,
  CardsContainer,
} from "./index.styled";

export const PopularRecipes = ({ cards }) => {
  return (
    <RecipesWrapper>
      <RecipesContent>
        <RecipesSuptitle>users choice</RecipesSuptitle>
        <RecipesTitle>20 Highest-Rated Recipes</RecipesTitle>
        <CardsContainer>
          {cards.map((item) => (
            <Card key={item.id} card={item}></Card>
          ))}
        </CardsContainer>
        <Button>Show More</Button>
      </RecipesContent>
    </RecipesWrapper>
  );
};
