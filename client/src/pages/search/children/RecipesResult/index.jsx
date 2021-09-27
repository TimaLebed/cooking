import React, { useState } from "react";

import { Card } from "../../../../shared/Card";
import { PopupRecipes } from "../../../../shared/PopupRecipes";
import { RecipesWrapper } from "./index.styled";

export const RecipesResult = ({ recipes }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);

  const cards = recipes.map((item, index) => {
    if (index === 3) return null;

    return (
      <Card
        recipesResult
        key={item.id}
        card={item}
        setPopupActive={setPopupActive}
        setClickedCardId={setClickedCardId}
      ></Card>
    );
  });

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

  return (
    <>
      <RecipesWrapper>
        {cards}
        {cards}
      </RecipesWrapper>
      {popup}
    </>
  );
};
