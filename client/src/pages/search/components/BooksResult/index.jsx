import React, { useState, useEffect } from "react";
import Card from "../../../../components/Card";
import Popup from "./Popup";
import { BooksWrapper } from "./BooksResult.styled";

const urlCards = "./dataCards.json";

function BooksResult() {
  const [data, setData] = useState({ cards: [] });
  const [popupActive, setPopupActive] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);

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

  const popup = data.cards.map((item, index) => {
    if(index === Number(clickedCardId)) {

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
        {cards}
        {cards}
        {cards}
      </BooksWrapper>
      {popup}
      {/* <Popup
        active={popupActive}
        setActive={setPopupActive}
        clickedCardId={clickedCardId}
      ></Popup> */}
    </>
  );
}

export default BooksResult;
