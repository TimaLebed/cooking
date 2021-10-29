import React, { useState } from "react";
import PropTypes from "prop-types";

import PopupEditButton from "../PopupEditButton";
import {
  CardWrapper,
  CardViews,
  ButtonEdit,
  PopupEdit,
  ButtonPopupEdit,
  CardImg,
  WrapperTitleAuthor,
  CardDescription,
  CardTitle,
  CardAuthor,
  WrapperLikesComments,
  CardLikes,
  CardComments,
} from "./index.styled";

const Card = ({
  trending,
  description,
  recipesResult,
  card,
  setPopupActive,
  setClickedCardId,
}) => {
  const [popupEditActive, setPopupEditActive] = useState(false);
  const handelClickCard = (event) => {
    const currentCardId = event.target.id;

    setPopupActive(true);
    setClickedCardId(currentCardId);
  };

  const handelClickButtonEdit = () => {
    setPopupEditActive(true);
  };

  return (
    <CardWrapper
      trending={trending}
      description={description}
      recipesResult={recipesResult}
    >
      <PopupEditButton active={popupEditActive} setActive={setPopupEditActive} />
      <CardViews recipesResult={recipesResult}>{card.views} views</CardViews>
      <ButtonEdit onClick={handelClickButtonEdit} recipesResult={recipesResult} />
      <CardImg
        id={card.id}
        onClick={handelClickCard}
        trending={trending}
        recipesResult={recipesResult}
        cardImg={card.img}
        alt=""
      />
      <WrapperTitleAuthor trending={trending} recipesResult={recipesResult}>
        <CardTitle>{card.title}</CardTitle>
        <CardAuthor>{card.author}</CardAuthor>
      </WrapperTitleAuthor>
      <CardDescription description={description} recipesResult={recipesResult}>
        {card.description}
      </CardDescription>
      <WrapperLikesComments trending={trending} recipesResult={recipesResult}>
        <CardLikes>{card.likes} likes</CardLikes>
        <CardComments>{card.comments} comments</CardComments>
      </WrapperLikesComments>
    </CardWrapper>
  );
};

Card.propTypes = {
  trending: PropTypes.bool,
  description: PropTypes.bool,
  recipesResult: PropTypes.bool,
  setPopupActive: PropTypes.func,
  setClickedCardId: PropTypes.func,
  card: PropTypes.exact({
    description: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    likes: PropTypes.string,
    views: PropTypes.string,
    comments: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    id: PropTypes.number,
    user_id: PropTypes.number,
    book_id: PropTypes.number,
    minutes: PropTypes.number,
    vegetarian: PropTypes.bool,
    without_milk: PropTypes.bool,
    without_eggs: PropTypes.bool,
    directions: PropTypes.array,
    ingredients: PropTypes.array,
  }),
};

Card.defaultProps = {
  trending: false,
  description: false,
  recipesResult: false,
  card: {
    description: "",
    img: "",
    title: "",
    author: "",
    likes: "",
    comments: "",
    views: "",
    createdAt: null,
    updatedAt: null,
    id: null,
    user_id: null,
    book_id: null,
    minutes: null,
    vegetarian: false,
    without_milk: false,
    without_eggs: false,
    directions: [],
    ingredients: [],
  },
  setPopupActive: () => {},
  setClickedCardId: () => {},
};

export default Card;
