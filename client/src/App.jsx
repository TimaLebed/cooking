import React from "react";
import { Global } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import BooksResult from "./pages/Search/components/BooksResult";
import RecipesResult from "./pages/Search/components/RecipesResult";

import { globalStyles, AppWrapper } from "./App.styled";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
