import React from "react";
import PropTypes from "prop-types";

import Card from "../Card";
import Button from "../Button";
import Comments from "../Comments";
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

const PopupBook = ({ active, setActive, clickedCard, books }) => {
  const [firstCards, secondCard] = books;
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
          <Img img={clickedCard.img} alt="" />
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
          {[firstCards, secondCard].map((item) => (
            <Card recipesResult key={`popup-${item.id}`} card={item} />
          ))}
        </WrapperCards>
        <Comments />
      </PopupContent>
    </PopupWrapper>
  );
};

PopupBook.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  books: PropTypes.array,
  clickedCard: PropTypes.exact({
    description: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    likes: PropTypes.string,
    comments: PropTypes.string,
  }),
};

PopupBook.defaultProps = {
  active: false,
  setActive: () => {},
  books: [],
  clickedCard: {
    description: "",
    img: "",
    title: "",
    author: "",
    likes: "",
    comments: "",
  },
};

export default PopupBook;
