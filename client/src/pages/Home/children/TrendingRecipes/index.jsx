import React, { useState, useEffect } from "react";
import { Button } from "../../../../shared/Button";
import { Card } from "../../../../shared/Card";
import {
  TrendingWrapper,
  TrendingContent,
  TrendingSuptitle,
  TrendingTitle,
  CardsSlider,
  Arrow,
  CardsPagination,
} from "./index.styled";

const urlCards = "./dataCards.json";

export const TrendingRecipes = ({ cards }) => {
  return (
    <TrendingWrapper>
      <TrendingContent>
        <TrendingSuptitle>Top 10</TrendingSuptitle>
        <TrendingTitle>Trending Recepies</TrendingTitle>
        <CardsSlider>
          {cards.map((item, index) => {
            if (index === 3) return null;

            return <Card trending key={item.id} card={item}></Card>;
          })}
        </CardsSlider>
        <Arrow left>&lt;</Arrow>
        <Arrow right>&gt;</Arrow>
        <CardsPagination></CardsPagination>
        <Button>Show All Recipies</Button>
      </TrendingContent>
    </TrendingWrapper>
  );
};
