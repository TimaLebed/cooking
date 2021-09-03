import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./index.css";


function Sign() {
  return (
    <div className="login">
      <Logo></Logo>
      <h2 className="login__title">Welcome back</h2>
      <p className="login__subtitle">
        New here?
        <Link to="/" className="login__create-link">Create an account</Link>
      </p>
      <div className="login__input-field">
        <input id="email" type="text" name="email" className="login__input"></input>
        <label htmlFor="email" className="login__label">Email</label>
      </div>
      <div className="login__input-field">
        <input id="password" type="password" name="password" className="login__input"></input>
        <label htmlFor="password" className="login__label">Password</label>
      </div>
      <button type="button" className="login__btn">Sign In</button>
    </div>
  )
}

export default Sign;
