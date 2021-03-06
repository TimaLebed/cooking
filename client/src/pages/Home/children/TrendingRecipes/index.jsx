import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../../../shared/Button";
import Card from "../../../../shared/Card";
import PopupRecipes from "../../../../shared/PopupRecipes";
import {
  TrendingWrapper,
  TrendingContent,
  TrendingSuptitle,
  TrendingTitle,
  CardsSlider,
  Arrow,
  CardsPagination,
} from "./index.styled";

const TrendingRecipes = ({ recipes }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);
  const recipe = recipes.find((item, index) => index === Number(clickedCardId));

  const cards = recipes.map((item, index) => {
    if (index === 3) return null;

    return (
      <Card
        trending
        key={item.id}
        card={item}
        setPopupActive={setPopupActive}
        setClickedCardId={setClickedCardId}
      />
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
          <CardsPagination />
          <Button>Show All Recipies</Button>
        </TrendingContent>
      </TrendingWrapper>
      <PopupRecipes
        // key={recipe.id}
        active={popupActive}
        setActive={setPopupActive}
        clickedCard={recipe}
      />
    </>
  );
};

TrendingRecipes.propTypes = {
  recipes: PropTypes.array,
};

TrendingRecipes.defaultProps = {
  recipes: [],
};

export default TrendingRecipes;
