import React from "react";

import { Card } from "../../../../shared/Card";
import { RecipesWrapper } from "./index.styled";

export const RecipesResult = ({ cards }) => {
  const recipes = cards.map((item, index) => {
    if (index === 3) return null;

    return <Card recipesResult key={item.id} card={item}></Card>;
  });
  return (
    <RecipesWrapper>
      {recipes}
      {recipes}
    </RecipesWrapper>
  );
};
