import React from "react";
import {
  LogoWrapper,
  LogoImg,
  LogoTitle
} from "./Logo.styled";

function Logo(props) {
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

export default Logo;
