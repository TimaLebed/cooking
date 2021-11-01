import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "../../../../shared/Card";
import PopupBook from "../../../../shared/PopupBook";
import { BooksWrapper } from "./index.styled";

const BooksResult = ({ books }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [clickedCardId, setClickedCardId] = useState(null);

  const cards = books.map((item) => (
    <Card
      description
      key={`card-${item.id}`}
      card={item}
      setPopupActive={setPopupActive}
      setClickedCardId={setClickedCardId}
    />
  ));

  const popup = books.map((item) => {
    if (item.id === Number(clickedCardId)) {
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

BooksResult.propTypes = {
  books: PropTypes.array,
};

BooksResult.defaultProps = {
  books: [],
};

export default BooksResult;
