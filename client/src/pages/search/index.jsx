import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Filter } from "./children/Filter";
import { BooksResult } from "./children/BooksResult";
import { RecipesResult } from "./children/RecipesResult";
import { fetchBooks, fetchRecipes } from "../../redux";

import { Wrapper, Inner, Content, Nav } from "./index.styled";

const Search = ({ fetchBooks, fetchRecipes, booksData, recipesData }) => {
  useEffect(() => {
    fetchBooks();
    fetchRecipes();
  }, []);

  const handleFilters = (filters) => {
    // console.log(filters)
  };

  return (
    <Router>
      <Wrapper>
        <Inner>
          <div>
            <Filter
              handleFilters={(filters) => handleFilters(filters)}
            ></Filter>
          </div>
          <Content>
            <Nav>
              <Link to="/recipes">Recepies</Link>
              <Link to="/books">Cookbooks</Link>
            </Nav>
            <Switch>
              <Route path="/books">
                {booksData.loading ? (
                  "loading..."
                ) : (
                  <BooksResult books={booksData.books}></BooksResult>
                )}
              </Route>
              <Route path="/recipes">
                {recipesData.loading ? (
                  "loading..."
                ) : (
                  <RecipesResult recipes={recipesData.recipes}></RecipesResult>
                )}
              </Route>
            </Switch>
          </Content>
        </Inner>
      </Wrapper>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    booksData: state.books,
    recipesData: state.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooks()),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
