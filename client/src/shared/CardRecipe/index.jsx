import React from "react";
import PropTypes from "prop-types";

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

const CardRecipe = ({card, setPopupActive, setClickedCardId}) => {
  const randomNumber = (n) => Math.floor(Math.random() * n);

  const handelClickCard = (event) => {
    const currentCardId = event.target.offsetParent.id;

    setPopupActive(true);
    setClickedCardId(currentCardId);
  };

  return (
    <CardWrapper id={card.id} onClick={handelClickCard}>
      <CardImg cardImg={card.img} alt="" />
      <Content>
        <WrapperTitleAuthor>
          <CardTitle>{card.title}</CardTitle>
          <CardAuthor>{card.author}</CardAuthor>
        </WrapperTitleAuthor>
        <CardDescription>{card.description}</CardDescription>
        <Wrapper>
          <WrapperViewsLikesComments>
            <CardViews>{randomNumber(90000)} views</CardViews>
            <CardLikes>{randomNumber(1000)} likes</CardLikes>
            <CardComments>{randomNumber(300)} comments</CardComments>
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
    id: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }),
};

CardRecipe.defaultProps = {
  card: {
    id: "",
    img: "",
    title: "",
    author: "",
    description: "",
  },
  setPopupActive: () => {},
  setClickedCardId: () => {},
};

export default CardRecipe;
