import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import { authRoutes, publicRoutes } from "./routes";
import { HOME_ROUTE } from "./utils/constants";

const AppRouter = ({ userData }) => {
  return (
    <Switch>
      {userData.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}

      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

AppRouter.propTypes = {
  userData: PropTypes.exact({
    isAuth: PropTypes.bool,
    user: PropTypes.object,
  }),
};

AppRouter.defaultProps = {
  userData: {
    isAuth: false,
    user: {},
  },
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps)(AppRouter);
