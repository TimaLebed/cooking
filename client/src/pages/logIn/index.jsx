import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../shared/Logo";
import { setUser, setAuth } from "../../redux";
import { login, checkAuth } from "../../api/userApi";
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

      setUser(user);
      setAuth(true);

      history.push(HOME_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <LoginWrapper>
      <LoginBackground />
      <LoginContent>
        <Logo />
        <LoginTitle>Welcome back</LoginTitle>
        <LoginSubtitle>
          New here?
          <Link to="/signup">Create an account</Link>
        </LoginSubtitle>
        <InputField>
          <Input id="email" type="text" name="email" onChange={changeHandler} />
          <Label htmlFor="email">Email</Label>
        </InputField>
        <InputField>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={changeHandler}
          />
          <Label htmlFor="password">Password</Label>
        </InputField>
        <Button type="button" onClick={sign}>
          Sign In
        </Button>
      </LoginContent>
    </LoginWrapper>
  );
};

Login.propTypes = {
  userData: PropTypes.object,
  setUser: PropTypes.func,
  setAuth: PropTypes.func,
};

Login.defaultProps = {
  userData: {},
  setUser: () => {},
  setAuth: () => {},
};

const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToProps = {
  setUser,
  setAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
