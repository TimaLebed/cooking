import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { setUser, setAuth } from "../../redux";
import { signup } from "../../api/userApi";
import { Logo } from "../../shared/Logo";
import { HOME_ROUTE } from "../../utils/constants";
import {
  SignUpWrapper,
  SignUpBackground,
  LoginWrapper,
  LoginTitle,
  LoginSubtitle,
  InputField,
  Input,
  Label,
  Button,
} from "./index.styled";

const SignUp = ({ userData, setUser, setAuth }) => {
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const sign = async () => {
    try {
      const user = await signup(form.email, form.password);
      console.log(user);
      setUser(user);
      setAuth(true);
      history.push(HOME_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  console.log(userData);

  return (
    <SignUpWrapper>
      <SignUpBackground></SignUpBackground>
      <LoginWrapper>
        <Logo></Logo>
        <LoginTitle>Welcome back</LoginTitle>
        <LoginSubtitle>
          Already have an account?
          <Link to="/login">Sign In</Link>
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
        <InputField>
          <Input
            id="confirm"
            type="password"
            name="confirm"
            onChange={changeHandler}
          ></Input>
          <Label htmlFor="confirm">Confirm Password</Label>
        </InputField>
        <Button type="button" onClick={sign}>
          Sign Up
        </Button>
      </LoginWrapper>
    </SignUpWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = {
  setUser,
  setAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
