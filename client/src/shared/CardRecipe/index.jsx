import React from "react";

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

export const CardRecipe = (props) => {
  const randomNumber = (n) => Math.floor(Math.random() * n);

  const handelClickCard = (event) => {
    const currentCardId = event.target.offsetParent.id;

    props.setPopupActive(true);
    props.setClickedCardId(currentCardId);
  };

  return (
    <CardWrapper id={props.card.id} {...props} onClick={handelClickCard}>
      <CardImg {...props} alt=""></CardImg>
      <Content>
        <WrapperTitleAuthor {...props}>
          <CardTitle>{props.card.title}</CardTitle>
          <CardAuthor>{props.card.author}</CardAuthor>
        </WrapperTitleAuthor>
        <CardDescription {...props}>{props.card.description}</CardDescription>
        <Wrapper>
          <WrapperViewsLikesComments {...props}>
            <CardViews {...props}>{randomNumber(90000)} views</CardViews>
            <CardLikes>{randomNumber(1000)} likes</CardLikes>
            <CardComments>{randomNumber(300)} comments</CardComments>
          </WrapperViewsLikesComments>
          <ButtonEdit {...props}></ButtonEdit>
        </Wrapper>
      </Content>
    </CardWrapper>
  );
};
