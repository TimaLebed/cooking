import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "../Card";
import {
  PopupWrapper,
  PopupContent,
  Title,
  InputField,
  TitleRecipe,
  Input,
  Label,
  Textarea,
  Button,
  Select,
  WrapperCards,
} from "./index.styled";

const options = [
  { key: 0, value: "1" },
  { key: 1, value: "2" },
  { key: 2, value: "3" },
];

const PopupCreateBook = ({ active, setActive, recipes }) => {
  const [firstCards, secondCard] = recipes;
  const [selectValue, setSelectValue] = useState(0);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  console.log(recipes);
  const handelClickPopupWrapper = () => {
    setActive(false);
  };

  const handelClickPopup = (event) => {
    event.stopPropagation();
  };

  const SelectChange = (event) => {
    setSelectValue(event.currentTarget.value);
  };

  return (
    <PopupWrapper active={active} onClick={handelClickPopupWrapper}>
      <PopupContent active={active} onClick={handelClickPopup}>
        <Title>Create New CookBook</Title>
        <InputField>
          <Input id="title" type="text" name="title" placeholder="Title" onChange={changeHandler} />
          <Label htmlFor="title">CookBook Title*</Label>
        </InputField>
        <Button>Upload CookBook Image</Button>
        <InputField>
          <Textarea id="description" name="description" placeholder="Description" onChange={changeHandler} />
          <Label htmlFor="description">Description</Label>
        </InputField>
        <TitleRecipe>Recipes</TitleRecipe>
        <Select onChange={SelectChange}>
          {options.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </Select>
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
  recipes: PropTypes.array,
};

PopupCreateBook.defaultProps = {
  active: false,
  setActive: () => {},
  recipes: [],
};

export default PopupCreateBook;
