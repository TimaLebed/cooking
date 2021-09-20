import React from "react";

import { Button } from "../../../../shared/Button";
import {
  BooksWrapper,
  BooksContent,
  BooksSuptitle,
  BooksTitle,
  BooksCards,
  Card,
  ContainerThreeCards,
  CardButton,
  ButtonEdit,
} from "./index.styled";

export const PopularBooks = () => {
  return (
    <BooksWrapper>
      <BooksContent>
        <BooksSuptitle>Our choice</BooksSuptitle>
        <BooksTitle>Most Popular CookBooks</BooksTitle>
        <BooksCards>
          <Card large>
            <CardButton type="button">Its All About Pancakes</CardButton>
            <ButtonEdit type="button"></ButtonEdit>
          </Card>
          <ContainerThreeCards>
            <Card medium>
              <CardButton type="button">Iccceeesream Dream</CardButton>
              <ButtonEdit type="button"></ButtonEdit>
            </Card>
            <Card left>
              <CardButton type="button">Fast Breakfast</CardButton>
              <ButtonEdit type="button"></ButtonEdit>
            </Card>
            <Card right>
              <CardButton type="button">Fruits and Vegetables</CardButton>
              <ButtonEdit type="button"></ButtonEdit>
            </Card>
          </ContainerThreeCards>
        </BooksCards>
        <Button>Show More</Button>
      </BooksContent>
    </BooksWrapper>
  );
};
