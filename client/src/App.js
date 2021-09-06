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

import { globalStyles } from './App.styled';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </Router>
      <Global styles={globalStyles} />
    </>
    );
}

export default App;
