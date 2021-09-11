import React from "react";
import { Global } from '@emotion/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from "./components/Footer";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";

import { globalStyles } from './App.styled';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header></Header>
              {/* <Home></Home> */}
              <Search></Search>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
              {/* <SignUp></SignUp> */}
            </Route>
          </Switch>
        </div>
      </Router>
      <Global styles={globalStyles} />
    </>
    );
}

export default App;
