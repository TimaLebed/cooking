import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';

import {
  CardWrapper,
  CardViews,
  ButtonEdit,
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
  const randomNumber = (n) => Math.floor(Math.random() * n);

  const handelClickCard = (event) => {
    const currentCardId = event.target.offsetParent.id;

    setPopupActive(true);
    setClickedCardId(currentCardId);
  };

  return (
    <CardWrapper
      id={uuidv4()}
      trending={trending}
      description={description}
      recipesResult={recipesResult}
      onClick={handelClickCard}
    >
      <CardViews recipesResult={recipesResult}>
        {randomNumber(90000)} views
      </CardViews>
      <ButtonEdit recipesResult={recipesResult} />
      <CardImg
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
        <CardLikes>{randomNumber(1000)} likes</CardLikes>
        <CardComments>{randomNumber(300)} comments</CardComments>
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
    directions: [],
    ingredients: [],
  },
  setPopupActive: () => {},
  setClickedCardId: () => {},
};

export default Card;
