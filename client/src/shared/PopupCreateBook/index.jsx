import React from "react";
import PropTypes from "prop-types";

import Card from "../Card";
import {
  PopupWrapper,
  PopupContent,
  Title,
  InputField,
  Input,
  Label,
  Textarea,
  Button,
  WrapperCards,
} from "./index.styled";

const PopupCreateBook = ({ active, setActive, books }) => {
  const [firstCards, secondCard] = books;
  console.log(books);
  const handelClickPopupWrapper = () => {
    setActive(false);
  };

  const handelClickPopup = (event) => {
    event.stopPropagation();
  };

  return (
    <PopupWrapper active={active} onClick={handelClickPopupWrapper}>
      <PopupContent active={active} onClick={handelClickPopup}>
        <Title>Create New CookBook</Title>
        <InputField>
          <Input id="title" type="text" name="title" placeholder="Title" />
          <Label htmlFor="title">CookBook Title*</Label>
        </InputField>
        <Button>Upload CookBook Image</Button>
        <InputField>
          <Textarea id="description" name="description" placeholder="escription" />
          <Label htmlFor="description">Description</Label>
        </InputField>
        <InputField>
          <Input id="recipe-title" type="text" name="recipe-title" placeholder="Recipe Title" />
          <Label htmlFor="recipe-title">Recipes</Label>
        </InputField>
        <WrapperCards>
          {/* {[firstCards, secondCard].map((item) => (
            <Card recipesResult key={`popup-${item.id}`} card={item} />
          ))} */}
        </WrapperCards>
      </PopupContent>
    </PopupWrapper>
  );
};

PopupCreateBook.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  books: PropTypes.array,
};

PopupCreateBook.defaultProps = {
  active: false,
  setActive: () => {},
  books: [],
};

export default PopupCreateBook;
