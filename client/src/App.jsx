import React from "react";
import { Global } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Login } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { globalStyles, AppWrapper } from "./App.styled";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppWrapper>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/books">
              <Header></Header>
              <Search></Search>
              <Footer></Footer>
            </Route>
            <Route path="/recipes">
              <Header></Header>
              <Search></Search>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </AppWrapper>
      </Router>
      <Global styles={globalStyles} />
    </Provider>
  );
};
