import React from "react";
import {
  LogoWrapper,
  LogoImg,
  LogoTitle
} from "./index.styled";

export const Logo = (props) => {
  return (
    <LogoWrapper>
      <LogoImg></LogoImg>
      <LogoTitle {...props}>
        <span>Feed</span>
        <span>me</span>
      </LogoTitle>
    </LogoWrapper>
  );
}
