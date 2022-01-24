import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import ButtonCreate from "../ButtonCreate";
import PopupCreateBook from "../PopupCreateBook";
import { setUser, setAuth, fetchBooks, fetchRecipes } from "../../redux";
import { BOOKS_ROUTE, RECIPES_ROUTE } from "../../utils/constants";
import {
  HeaderWrapper,
  HeaderInner,
  HeaderNav,
  HeaderForm,
  HeaderInput,
  HeaderIcon,
} from "./index.styled";

const Header = ({
  userData,
  setUser,
  setAuth,
  fetchBooks,
  fetchRecipes,
  booksData,
  recipesData,
}) => {
  const [popupActive, setPopupActive] = useState(true);
  console.log(recipesData.loading);

  useEffect(() => {
    fetchBooks();
    fetchRecipes();
  }, []);

  const signOut = () => {
    setUser(null);
    setAuth(false);
    localStorage.setItem("token", "");
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <Logo />
          <HeaderNav>
            <Link to={RECIPES_ROUTE}>Recipes</Link>
            <Link to={BOOKS_ROUTE}>Cookbooks</Link>
          </HeaderNav>
          <HeaderForm>
            <HeaderInput type="text" />
            <HeaderIcon height="16" version="1.1" viewBox="0 0 16 16" width="16">
              <path
                fillRule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              />
            </HeaderIcon>
          </HeaderForm>
          <ButtonCreate setActive={setPopupActive}>Create cookBook</ButtonCreate>
          {userData.isAuth ? (
            <>
              <h5>{userData.user.email}</h5>
              <Link to="/login" onClick={() => signOut()}>
                Sign out
              </Link>
            </>
          ) : (
            <Link to="/login">Sign in</Link>
          )}
        </HeaderInner>
      </HeaderWrapper>
      <PopupCreateBook
        active={popupActive}
        setActive={setPopupActive}
        recipes={recipesData.recipes}
      ></PopupCreateBook>
    </>
  );
};

Header.propTypes = {
  setAuth: PropTypes.func,
  setUser: PropTypes.func,
  userData: PropTypes.exact({
    isAuth: PropTypes.bool,
    user: PropTypes.exact({
      email: PropTypes.string,
      role: PropTypes.string,
      id: PropTypes.number,
      iat: PropTypes.number,
      exp: PropTypes.number,
    }),
  }),
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

Header.defaultProps = {
  userData: {
    isAuth: false,
    user: {
      email: "",
      role: "",
      id: 0,
      iat: 0,
      exp: 0,
    },
  },
  setUser: () => {},
  setAuth: () => {},
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
    userData: state.user,
    booksData: state.books,
    recipesData: state.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser,
    setAuth,
    fetchBooks: () => dispatch(fetchBooks()),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
