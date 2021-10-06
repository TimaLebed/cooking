import React, { useState, useEffect } from "react";
import { Comment } from "./Comment";
import {
  CommentsWrapper,
  Title,
  Form,
  Input,
  Button,
  WrapperComments,
} from "./index.styled";

const urlCards = "./dataCards.json";

export const Comments = () => {
  const [data, setData] = useState({ cards: [] });

  useEffect(() => {
    const fetchCards = async () => {
      let response = await fetch(urlCards);
      response = await response.json();

      setData({ cards: response });
    };

    fetchCards();
  }, []);

  const comments = data.cards.map((item) => {
    return <Comment key={item.id} person={item}></Comment>;
  });

  return (
    <CommentsWrapper>
      <Title>Comments ({data.cards.length})</Title>
      <Form>
        <Input
          type="text"
          placeholder="Express yourself..."
          // value={props.searchValue}
          // onChange={props.onSearchInput}
        />
        <Button></Button>
      </Form>
      <WrapperComments>{comments}</WrapperComments>
    </CommentsWrapper>
  );
};