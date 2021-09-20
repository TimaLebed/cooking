import React from "react";

import { StyledButton } from "./index.styled";

export const Button = (props) => {
  return (
    <StyledButton {...props}>{ props.children }</StyledButton>
  )
}
