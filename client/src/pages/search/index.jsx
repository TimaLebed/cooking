import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Filter } from "./children/Filter";
import { BooksResult } from "./children/BooksResult";
import { RecipesResult } from "./children/RecipesResult";
import { fetchCards } from "../../api";
import { useReduxApi } from "../../hooks/useReduxApi";

import { Wrapper, Inner, Content, Nav } from "./index.styled";

const Search = () => {
  const { data } = useReduxApi(fetchCards, "cardsReducer");
  const cards = data.cards || [];

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
                <BooksResult cards={cards}></BooksResult>
              </Route>
              <Route path="/recipes">
                <RecipesResult cards={cards}></RecipesResult>
              </Route>
            </Switch>
          </Content>
        </Inner>
      </Wrapper>
    </Router>
  );
};

const mapDispatchToProps = {
  fetchCards,
};

export default connect(null, mapDispatchToProps)(Search);
