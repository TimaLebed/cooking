import React from "react";

import {
  CardWrapper,
  CardViews,
  ButtonEdit,
  CardImg,
  WrapperTitleAuthor,
  CardTitle,
  CardAuthor,
  WrapperLikesComments,
  CardLikes,
  CardComments
} from "./Card.styled";

function Card(props) {
  const randomNumber = (n) => (
    Math.floor(Math.random() * n)
  );

  return (
    <CardWrapper {...props}>
      <CardViews>{randomNumber(90000)} views</CardViews>
      <ButtonEdit></ButtonEdit>
      <CardImg {...props} alt=""></CardImg>
      <WrapperTitleAuthor {...props}>
        <CardTitle>{props.card.title}</CardTitle>
        <CardAuthor>{props.card.author}</CardAuthor>
      </WrapperTitleAuthor>
      <WrapperLikesComments {...props}>
        <CardLikes>{randomNumber(1000)} likes</CardLikes>
        <CardComments>{randomNumber(300)} comments</CardComments>
      </WrapperLikesComments>
    </CardWrapper>
  )
}

export default Card;
