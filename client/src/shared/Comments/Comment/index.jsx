import React from "react";
import {
  CommentWrapper,
  Img,
  WrapperContent,
  WrapperAuthorTime,
  Author,
  Time,
  Description
} from "./index.styled";

export const Comment = ({ person }) => {
  return (
    <CommentWrapper>
      <Img img={person.img} alt=""></Img>
      <WrapperContent>
        <WrapperAuthorTime>
          <Author>{person.author}</Author>
          <Time>5 minutes ago</Time>
        </WrapperAuthorTime>
        <Description>{person.description}</Description>
      </WrapperContent>
    </CommentWrapper>
  );
}
