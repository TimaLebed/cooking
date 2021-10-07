import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { setUser, setAuth } from "../../redux";
import { login, checkAuth } from "../../api/userApi";
import { Logo } from "../../shared/Logo";
import { HOME_ROUTE } from "../../utils/constants";
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

const Login = ({ userData, setUser, setAuth }) => {
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
      const user = await login(form.email, form.password);
      const token = localStorage.getItem("token");
      const isAuth = await checkAuth(token);

      setUser(user);
      setAuth(isAuth);

      history.push(HOME_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
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
        <Button type="button" onClick={sign}>
          Sign In
        </Button>
      </LoginContent>
    </LoginWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
