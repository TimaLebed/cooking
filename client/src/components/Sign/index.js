import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import {
  LoginWrapper,
  LoginTitle,
  LoginSubtitle,
  InputField,
  Input,
  Label,
  Button
} from "./Sign.styled";


function Sign() {
  return (
    <LoginWrapper>
      <Logo></Logo>
      <LoginTitle>Welcome back</LoginTitle>
      <LoginSubtitle>
        New here?
        <Link to="/" className="login__create-link">Create an account</Link>
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
    </LoginWrapper>
  )
}

export default Sign;
