import React, { useState, useEffect } from "react";
import Card from "../../../../components/Card";
import { RecipesWrapper } from "./RecipesResult.styled";

const urlCards = "./dataCards.json";

function RecipesResult() {
  const [data, setData] = useState({ cards: [] });

  useEffect(() => {
    const fetchCards = async () => {
      let response = await fetch(urlCards);
      response = await response.json();

      setData({ cards: response });
    };

    fetchCards();
  }, []);

  const cards = data.cards.map((item, index) => {
    if (index === 3) return null;

    return <Card recipesResult key={item.id} card={item}></Card>;
  });
  return (
    <RecipesWrapper>
      {cards}
      {cards}
    </RecipesWrapper>
  );
}

export default RecipesResult;
