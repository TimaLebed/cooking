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
  return (
    <CardWrapper {...props}>
      <CardViews>{props.card.views} views</CardViews>
      <ButtonEdit></ButtonEdit>
      <CardImg {...props} alt=""></CardImg>
      <WrapperTitleAuthor {...props}>
        <CardTitle>{props.card.title}</CardTitle>
        <CardAuthor>{props.card.author}</CardAuthor>
      </WrapperTitleAuthor>
      <WrapperLikesComments {...props}>
        <CardLikes>{props.card.likes} likes</CardLikes>
        <CardComments>{props.card.comments} comments</CardComments>
      </WrapperLikesComments>
    </CardWrapper>
  )
}

export default Card;
