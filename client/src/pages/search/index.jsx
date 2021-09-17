import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Filter from "./components/Filter";
import BooksResult from "./components/BooksResult";
import RecipesResult from "./components/RecipesResult";
import { Wrapper, Inner, Content, Nav } from "./Search.styled";

function Search() {
  return (
    <Router>
      <Wrapper>
        <Inner>
          <div>
            <Filter></Filter>
          </div>
          <Content>
            <Nav>
              <Link to="/recipes">Recepies</Link>
              <Link to="/books">Cookbooks</Link>
            </Nav>
            <Switch>
              <Route path="/books">
                <BooksResult></BooksResult>
              </Route>
              <Route path="/recipes">
                <RecipesResult></RecipesResult>
              </Route>
            </Switch>
          </Content>
        </Inner>
      </Wrapper>
    </Router>
  );
}

export default Search;
