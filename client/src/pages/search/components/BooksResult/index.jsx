import React, { useState, useEffect } from "react";
import Card from "../../../../components/Card";
import { BooksWrapper } from "./BooksResult.styled";

const urlCards = "./dataCards.json";

function BooksResult() {
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

    return <Card description key={item.id} card={item}></Card>;
  });
  return (
    <BooksWrapper>
      {cards}
      {cards}
      {cards}
    </BooksWrapper>
  );
}

export default BooksResult;
