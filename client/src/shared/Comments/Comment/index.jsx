import React from "react";
import PropTypes from "prop-types";

import {
  CommentWrapper,
  Img,
  WrapperContent,
  WrapperAuthorTime,
  Author,
  Time,
  Description,
} from "./index.styled";

const Comment = ({ person }) => {
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
};

Comment.propTypes = {
  person: PropTypes.exact({
    img: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }),
};

Comment.defaultProps = {
  person: {
    img: "",
    author: "",
    description: "",
  },
};

export default Comment;
