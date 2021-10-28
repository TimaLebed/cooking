import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Filter from "./children/Filter";
import BooksResult from "./children/BooksResult";
import RecipesResult from "./children/RecipesResult";
import { fetchBooks, fetchRecipes } from "../../redux";
import { Wrapper, Inner, Content, Nav } from "./index.styled";
import { BOOKS_ROUTE, RECIPES_ROUTE } from "../../utils/constants";

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
            <Filter handleFilters={(filters) => handleFilters(filters)}></Filter>
          </div>
          <Content>
            <Nav>
              <Link to={RECIPES_ROUTE}>Recepies</Link>
              <Link to={BOOKS_ROUTE}>Cookbooks</Link>
            </Nav>
            <Switch>
              <Route path={BOOKS_ROUTE}>
                {booksData.loading ? (
                  "loading..."
                ) : (
                  <BooksResult books={booksData.books}></BooksResult>
                )}
              </Route>
              <Route path={RECIPES_ROUTE}>
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

Search.propTypes = {
  fetchBooks: PropTypes.func,
  fetchRecipes: PropTypes.func,
  booksData: PropTypes.exact({
    loading: PropTypes.bool,
    books: PropTypes.array,
    error: PropTypes.string,
  }),
  recipesData: PropTypes.exact({
    loading: PropTypes.bool,
    recipes: PropTypes.array,
    error: PropTypes.string,
  }),
};

Search.defaultProps = {
  fetchBooks: () => {},
  fetchRecipes: () => {},
  booksData: {
    loading: false,
    books: [],
    error: "",
  },
  recipesData: {
    loading: false,
    recipes: [],
    error: "",
  },
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
