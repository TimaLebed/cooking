import React from "react";
import { Sign } from "../../shared/Sign";
import { SignUpWrapper, SignUpBackground } from "./index.styled";

export const SignUp = () => {
  return (
    <SignUpWrapper>
      <SignUpBackground></SignUpBackground>
      <Sign></Sign>
    </SignUpWrapper>
  );
};
