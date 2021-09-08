import React from "react";
import Sign from "../../components/Sign";
import {
  LoginWrapper,
  LoginBackground,
} from "./Login.styled";

function Login() {
  return (
    <LoginWrapper>
      <LoginBackground></LoginBackground>
      <Sign></Sign>
    </LoginWrapper>
  )
}

export default Login;
