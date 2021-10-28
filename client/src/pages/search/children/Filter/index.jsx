import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  FilterWrapper,
  FilterTitle,
  ButtonClear,
  FilterSubtitle,
  Select,
  TitleType,
  Label,
  Checkbox,
  SpanFake,
  Span,
} from "./index.styled";

const options = [
  { key: 0, value: "Popularity" },
  { key: 1, value: "Likes" },
  { key: 2, value: "Comments" },
];

const checkbox = [
  { key: 0, value: "Vegetarian" },
  { key: 1, value: "Without Milk" },
  { key: 2, value: "Without Eggs" },
  { key: 3, value: "Hide My CookBooks" },
];

const Filter = ({ handleFilters }) => {
  const [selectValue, setSelectValue] = useState(0);
  const [checked, setChecked] = useState([]);

  const onSelectChange = (event) => {
    setSelectValue(event.currentTarget.value);
  };

  const handleToggle = (id) => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];
    console.log(currentIndex);

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(newChecked);
    setChecked(newChecked);
    handleFilters(newChecked);
  };

  return (
    <FilterWrapper>
      <FilterTitle>Filter</FilterTitle>
      <ButtonClear>clear all</ButtonClear>
      <FilterSubtitle>Sort by</FilterSubtitle>
      <Select onChange={onSelectChange}>
        {options.map((item) => (
          <option key={item.key} value={item.key}>
            {item.value}
          </option>
        ))}
      </Select>
      <TitleType>Cookbook type</TitleType>
      {checkbox.map((item, index) => (
        <Label key={index}>
          <Checkbox
            onChange={() => handleToggle(item.id)}
            type="checkbox"
            checked={checked.indexOf(item.id) === -1 ? false : true}
          ></Checkbox>
          <SpanFake></SpanFake>
          <Span>{item.value}</Span>
        </Label>
      ))}
    </FilterWrapper>
  );
};

Filter.propTypes = {
  handleFilters: PropTypes.func,
};

Filter.defaultProps = {
  handleFilters: () => {},
};

export default Filter;
