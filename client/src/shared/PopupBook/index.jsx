import React, { useState, useEffect } from "react";

import { Card } from "../Card";
import { Button } from "../Button";
import { Comments } from "../Comments";
import {
  PopupWrapper,
  PopupContent,
  WrapperTitleAuthor,
  Title,
  Author,
  WrapperImgDescription,
  Img,
  Description,
  DescriptionTitle,
  DescriptionText,
  WrapperLikesComments,
  Like,
  Comment,
  TitleRecipes,
  WrapperCards,
} from "./index.styled";

export const PopupBook = ({ active, setActive, clickedCard, books }) => {
  const cards = books.map((item, index) => {
    if (index < 2) {
      return <Card recipesResult key={`popup-${item.id}`} card={item}></Card>;
    }
  });

  const handelClickPopupWrapper = () => {
    setActive(false);
  };

  const handelClickPopup = (event) => {
    event.stopPropagation();
  };

  return (
    <PopupWrapper active={active} onClick={handelClickPopupWrapper}>
      <PopupContent active={active} onClick={handelClickPopup}>
        <WrapperTitleAuthor>
          <Title>{clickedCard.title}</Title>
          <Author>{clickedCard.author}</Author>
        </WrapperTitleAuthor>
        <Button details>Clone to My CookBook</Button>
        <WrapperImgDescription>
          <Img img={clickedCard.img} alt=""></Img>
          <Description>
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionText>{clickedCard.description}</DescriptionText>
          </Description>
        </WrapperImgDescription>
        <WrapperLikesComments>
          <Like>{clickedCard.likes} likes</Like>
          <Comment>{clickedCard.comments} comments</Comment>
        </WrapperLikesComments>
        <TitleRecipes>Recipes</TitleRecipes>
        <WrapperCards>{cards}</WrapperCards>
        <Comments></Comments>
      </PopupContent>
    </PopupWrapper>
  );
};
