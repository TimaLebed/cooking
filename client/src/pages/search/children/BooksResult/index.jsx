import React, { useState } from "react";
import { Card } from "../../../../shared/Card";
import { Popup } from "./Popup";
import { BooksWrapper } from "./index.styled";

export const BooksResult = ({ cards }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);

  const books = cards.map((item, index) => {
    if (index === 3) return null;

    return (
      <Card
        description
        key={item.id}
        card={item}
        setPopupActive={setPopupActive}
        setClickedCardId={setClickedCardId}
      ></Card>
    );
  });

  const popup = cards.map((item, index) => {
    if (index === Number(clickedCardId)) {
      return (
        <Popup
          key={item.id}
          active={popupActive}
          setActive={setPopupActive}
          clickedCard={item}
        ></Popup>
      );
    }
  });

  return (
    <>
      <BooksWrapper>
        {books}
        {books}
        {books}
      </BooksWrapper>
      {popup}
    </>
  );
};
