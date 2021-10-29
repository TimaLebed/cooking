import React, { useState } from "react";
import PropTypes from "prop-types";

import CardRecipe from "../../../../shared/CardRecipe";
import PopupRecipes from "../../../../shared/PopupRecipes";
import { RecipesWrapper } from "./index.styled";

const RecipesResult = ({ recipes }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);

  const recipe = recipes.find((item) => item.id === Number(clickedCardId));

  const cards = recipes.map((item, index) => {
    if (index === 3) return null;

    return (
      <CardRecipe
        recipesResult
        key={item.id}
        card={item}
        setPopupActive={setPopupActive}
        setClickedCardId={setClickedCardId}
      />
    );
  });

  const popup = recipes.map((item, index) => {
    if (item.id === Number(clickedCardId)) {
      return (
        <PopupRecipes
          key={item.id}
          active={popupActive}
          setActive={setPopupActive}
          clickedCard={item}
        />
      );
    }
  });

  return (
    <>
      <RecipesWrapper>
        {cards}
        {cards}
      </RecipesWrapper>
      {/* {popup} */}
      <PopupRecipes
        // key={item.id}
        active={popupActive}
        setActive={setPopupActive}
        clickedCard={recipe}
      />
    </>
  );
};

RecipesResult.propTypes = {
  recipes: PropTypes.array,
};

RecipesResult.defaultProps = {
  recipes: [],
};

export default RecipesResult;
