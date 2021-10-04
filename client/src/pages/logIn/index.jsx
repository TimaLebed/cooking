import axios from "axios";
import React, { useState } from "react";
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
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const registerHandler = async () => {
    try {
      await axios
        .post(
          "http://localhost:5000/login",
          { ...form },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log(response));
    } catch (error) {
      console.log("registerHandler",error);
    }
  };

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
          <Input
            id="email"
            type="text"
            name="email"
            onChange={changeHandler}
          ></Input>
          <Label htmlFor="email">Email</Label>
        </InputField>
        <InputField>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={changeHandler}
          ></Input>
          <Label htmlFor="password">Password</Label>
        </InputField>
        <Button type="button" onClick={registerHandler}>Sign In</Button>
      </LoginContent>
    </LoginWrapper>
  );
};
