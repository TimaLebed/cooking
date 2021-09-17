import React, { useState, useEffect } from "react";
import Card from "../../../../../components/Card";
import Button from "../../../../../components/Button";
import Comments from "../../../../../components/Comments";

import "./index.css";
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
  WrapperCards
} from "./Popup.styled";

const urlCards = "./dataCards.json";

function Popup({active, setActive, clickedCard}) {
  const [data, setData] = useState({ cards: [] });

  useEffect(() => {
    const fetchCards = async () => {
      let response = await fetch(urlCards);
      response = await response.json();

      setData({ cards: response });
    };

    fetchCards();
  }, []);

  const cards = data.cards.map((item, index) => {
    if (index < 2) {

      return (
        <Card
          recipesResult
          key={item.id}
          card={item}
        ></Card>
       );
  }
  });

  const handelClickPopupWrapper = () => {
    setActive(false);
  }

  const handelClickPopup = (event) => {
    event.stopPropagation()
  }

  return (
    <div className={active ? "popup-wrapper active" : "popup-wrapper"} onClick={handelClickPopupWrapper}>
      <div className={active ? "popup active" : "popup"} onClick={handelClickPopup}>
        <WrapperTitleAuthor>
          <Title>{clickedCard.title}</Title>
          <Author>{clickedCard.author}</Author>
        </WrapperTitleAuthor>
        <Button details>Clone to My CoookBok</Button>
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
        <WrapperCards>
          {cards}
        </WrapperCards>
        <Comments></Comments>
      </div>
    </div>
  )
}

export default Popup;
