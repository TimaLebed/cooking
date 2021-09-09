import React from "react";
import Sign from "../../components/Sign";
import {
  SignUpWrapper,
  SignUpBackground,
} from "./SignUp.styled";

function SignUp() {
  return (
    <SignUpWrapper>
      <SignUpBackground></SignUpBackground>
      <Sign></Sign>
    </SignUpWrapper>
  )
}

export default SignUp;
