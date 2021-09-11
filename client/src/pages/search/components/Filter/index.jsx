import React from "react";
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
  Span
} from "./Filter.styled";

function Filter() {
  return (
    <FilterWrapper>
      <FilterTitle>Filter</FilterTitle>
      <ButtonClear>clear all</ButtonClear>
      <FilterSubtitle>Sort by</FilterSubtitle>
      <Select>
        <option selected>Popularity</option>
        <option value="likes">Likes</option>
        <option value="comments">Comments</option>
      </Select>
      <TitleType>Cookbook type</TitleType>
      <Label>
        <Checkbox type="checkbox"></Checkbox>
        <SpanFake></SpanFake>
        <Span>Vegetarian</Span>
      </Label>
      <Label>
        <Checkbox type="checkbox"></Checkbox>
        <SpanFake></SpanFake>
        <Span>Without Milk</Span>
      </Label>
      <Label>
        <Checkbox type="checkbox"></Checkbox>
        <SpanFake></SpanFake>
        <Span>Without Eggs</Span>
      </Label>
      <Label>
        <Checkbox type="checkbox"></Checkbox>
        <SpanFake></SpanFake>
        <Span>Hide My CookBoks</Span>
      </Label>
    </FilterWrapper>
  )
}

export default Filter;
