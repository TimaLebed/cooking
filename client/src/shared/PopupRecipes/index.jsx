import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Comments from "../Comments";
import {
  PopupWrapper,
  PopupInner,
  Content,
  WrapperTitleAuthor,
  Title,
  Author,
  Img,
  Description,
  DescriptionTitle,
  DescriptionText,
  WrapperDirectionsIngredients,
  Directions,
  DirectionTitle,
  DirectionStep,
  Ingredients,
  IngredientTitle,
  IngredientStep,
  ViewsLikesComments,
  View,
  Like,
  Comment,
} from "./index.styled";

const PopupRecipes = ({ active, setActive, clickedCard }) => {
  const handelClickPopupWrapper = () => {
    setActive(false);
  };

  const handelClickPopup = (event) => {
    event.stopPropagation();
  };

  const DirectionSteps = clickedCard.directions.map((item, index) => (
    <DirectionStep key={index}>
      <span>Step {index + 1}</span>: {item}
    </DirectionStep>
  ));

  const IngredientSteps = clickedCard.ingredients.map((item, index) => (
    <IngredientStep key={index}>
      <span>Step {index + 1}</span>: {item}
    </IngredientStep>
  ));

  return (
    <PopupWrapper active={active} onClick={handelClickPopupWrapper}>
      <PopupInner active={active} onClick={handelClickPopup}>
        <Img img={clickedCard.img} alt="" />
        <Content>
          <WrapperTitleAuthor>
            <Title>{clickedCard.title}</Title>
            <Author>{clickedCard.author}</Author>
          </WrapperTitleAuthor>
          <Button details>+</Button>
          <Description>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionText>{clickedCard.description}</DescriptionText>
          </Description>
          <WrapperDirectionsIngredients>
            <Directions>
              <DirectionTitle>Directions</DirectionTitle>
              {DirectionSteps}
            </Directions>
            <Ingredients>
              <IngredientTitle>Ingredients</IngredientTitle>
              {IngredientSteps}
            </Ingredients>
          </WrapperDirectionsIngredients>
          <ViewsLikesComments>
            <View>{clickedCard.views} views</View>
            <Like>{clickedCard.likes} likes</Like>
            <Comment>{clickedCard.comments} comments</Comment>
          </ViewsLikesComments>
        </Content>
        <Comments />
      </PopupInner>
    </PopupWrapper>
  );
};

PopupRecipes.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  clickedCard: PropTypes.exact({
    description: PropTypes.string,
    directions: PropTypes.array,
    ingredients: PropTypes.array,
    img: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    views: PropTypes.string,
    likes: PropTypes.string,
    comments: PropTypes.string,
  }),
};

PopupRecipes.defaultProps = {
  active: false,
  setActive: () => {},
  clickedCard: {
    directions: [],
    ingredients: [],
    description: "",
    img: "",
    title: "",
    author: "",
    views: "",
    likes: "",
    comments: "",
  },
};

export default PopupRecipes;
