import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../shared/Logo";
import {
  LoginWrapper,
  LoginBackground,
  LoginContent,
  LoginTitle,
  LoginSubtitle,
  InputField,
  Input,
  Label,
  Button,
} from "./index.styled";

export const Login = () => {
  return (
    <LoginWrapper>
      <LoginBackground></LoginBackground>
      <LoginContent>
        <Logo></Logo>
        <LoginTitle>Welcome back</LoginTitle>
        <LoginSubtitle>
          New here?
          <Link to="/signup">Create an account</Link>
        </LoginSubtitle>
        <InputField>
          <Input id="email" type="text" name="email"></Input>
          <Label htmlFor="email">Email</Label>
        </InputField>
        <InputField>
          <Input id="password" type="password" name="password"></Input>
          <Label htmlFor="password">Password</Label>
        </InputField>
        <Button type="button">Sign In</Button>
      </LoginContent>
    </LoginWrapper>
  );
};
