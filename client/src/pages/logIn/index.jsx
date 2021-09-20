import React from "react";

import { Sign } from "../../shared/Sign";
import { LoginWrapper, LoginBackground } from "./index.styled";

export const Login = () => {
  return (
    <LoginWrapper>
      <LoginBackground></LoginBackground>
      <Sign hiddenConfirm></Sign>
    </LoginWrapper>
  );
};
