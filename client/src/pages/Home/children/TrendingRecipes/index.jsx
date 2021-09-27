import React, { useState } from "react";

import { Button } from "../../../../shared/Button";
import { Card } from "../../../../shared/Card";
import { PopupRecipes } from "../../../../shared/PopupRecipes";
import {
  TrendingWrapper,
  TrendingContent,
  TrendingSuptitle,
  TrendingTitle,
  CardsSlider,
  Arrow,
  CardsPagination,
} from "./index.styled";

export const TrendingRecipes = ({ recipes }) => {
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

  const cards = recipes.map((item, index) => {
    if (index === 3) return null;

    return (
      <Card
        trending
        key={item.id}
        card={item}
        setPopupActive={setPopupActive}
        setClickedCardId={setClickedCardId}
      ></Card>
    );
  });

  return (
    <>
      <TrendingWrapper>
        <TrendingContent>
          <TrendingSuptitle>Top 10</TrendingSuptitle>
          <TrendingTitle>Trending Recepies</TrendingTitle>
          <CardsSlider>{cards}</CardsSlider>
          <Arrow left>&lt;</Arrow>
          <Arrow right>&gt;</Arrow>
          <CardsPagination></CardsPagination>
          <Button>Show All Recipies</Button>
        </TrendingContent>
      </TrendingWrapper>
      {popup}
    </>
  );
};
