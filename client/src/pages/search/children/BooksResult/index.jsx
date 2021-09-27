import React, { useState } from "react";

import { Card } from "../../../../shared/Card";
import { PopupBook } from "../../../../shared/PopupBook";
import { BooksWrapper } from "./index.styled";

export const BooksResult = ({ books }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);
  // console.log(books)

  const cards = books.map((item, index) => {
    if (index === 3) return null;

    return (
        <Card
          description
          key={`card-${item.id}`}
          card={item}
          setPopupActive={setPopupActive}
          setClickedCardId={setClickedCardId}
        ></Card>
    );
  });

  const popup = books.map((item, index) => {
    if (index === Number(clickedCardId)) {
      return (
        <PopupBook
          key={`popupbook-${item.id}`}
          active={popupActive}
          setActive={setPopupActive}
          clickedCard={item}
          books={books}
        ></PopupBook>
      );
    }
  });

  return (
    <>
      <BooksWrapper>
        {cards}
      </BooksWrapper>
      {popup}
    </>
  );
};
