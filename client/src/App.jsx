import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Global } from "@emotion/react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./AppRouter";
import { setUser, setAuth } from "./redux";
import { checkAuth } from "./api/userApi";
import { globalStyles, AppWrapper } from "./App.styled";

const App = ({ setUser, setAuth }) => {
  useEffect(() => {
    checkAuth().then(user => {
          setUser(user);
          setAuth(true);
    })
  }, []);
  return (
    <>
      <Router>
        <AppWrapper>
          <AppRouter />
        </AppWrapper>
      </Router>
      <Global styles={globalStyles} />
    </>
  );
};

App.propTypes = {
  setUser: PropTypes.func,
  setAuth: PropTypes.func,
};

App.defaultProps = {
  setUser: () => {},
  setAuth: () => {},
};

const mapDispatchToProps = {
  setUser,
  setAuth,
};

export default connect(null, mapDispatchToProps)(App);
