import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  CardWrapper,
  Content,
  CardImg,
  CardViews,
  ButtonEdit,
  WrapperTitleAuthor,
  CardDescription,
  Wrapper,
  CardTitle,
  CardAuthor,
  WrapperViewsLikesComments,
  CardLikes,
  CardComments,
} from "./index.styled";

const CardRecipe = ({ card, setPopupActive, setClickedCardId }) => {
  const handelClickCard = (event) => {
    const currentCardId = event.target.id;

    setPopupActive(true);
    setClickedCardId(currentCardId);
  };

  return (
    <CardWrapper>
      <CardImg cardImg={card.img} alt="" onClick={handelClickCard} id={card.id} />
      <Content>
        <WrapperTitleAuthor>
          <CardTitle>{card.title}</CardTitle>
          <CardAuthor>{card.author}</CardAuthor>
        </WrapperTitleAuthor>
        <CardDescription>{card.description}</CardDescription>
        <Wrapper>
          <WrapperViewsLikesComments>
            <CardViews>{card.views} views</CardViews>
            <CardLikes>{card.likes} likes</CardLikes>
            <CardComments>{} comments</CardComments>
          </WrapperViewsLikesComments>
          <ButtonEdit />
        </Wrapper>
      </Content>
    </CardWrapper>
  );
};

CardRecipe.propTypes = {
  setPopupActive: PropTypes.func,
  setClickedCardId: PropTypes.func,
  card: PropTypes.exact({
    description: PropTypes.string,
    directions: PropTypes.array,
    ingredients: PropTypes.array,
    img: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    views: PropTypes.string,
    likes: PropTypes.string,
    comments: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    id: PropTypes.number,
    user_id: PropTypes.number,
    book_id: PropTypes.number,
    minutes: PropTypes.number,
  }),
};

CardRecipe.defaultProps = {
  card: {
    directions: [],
    ingredients: [],
    description: "",
    img: "",
    title: "",
    author: "",
    views: "",
    likes: "",
    comments: "",
    createdAt: null,
    updatedAt: null,
    id: null,
    user_id: null,
    book_id: null,
    minutes: null,
  },
  setPopupActive: () => {},
  setClickedCardId: () => {},
};

export default CardRecipe;
