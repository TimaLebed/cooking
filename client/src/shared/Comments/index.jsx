import React, { useState, useEffect } from "react";

import Comment from "./Comment";
import {
  CommentsWrapper,
  Title,
  Form,
  Input,
  Button,
  WrapperComments,
} from "./index.styled";

const Comments = () => {
  const [data, setData] = useState({ cards: [] });

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     let response = await fetch(urlCards);
  //     let data = await response.json();

  //     setData({ cards: data });
  //   };

  //   fetchCards();
  // }, []);

  const comments = data.cards.map((item) => {
    return <Comment key={item.id} person={item}></Comment>;
  });

  return (
    <CommentsWrapper>
      <Title>Comments ({data.cards.length})</Title>
      <Form>
        <Input type="text" placeholder="Express yourself..." />
        <Button></Button>
      </Form>
      <WrapperComments>{comments}</WrapperComments>
    </CommentsWrapper>
  );
};

export default Comments;
