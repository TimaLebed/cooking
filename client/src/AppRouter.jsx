import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";

import { HOME_ROUTE } from "./utils/constants";

const AppRouter = ({ userData }) => {
  return (
    <Switch>
      {userData.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact></Route>
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact></Route>
      ))}

      <Redirect to={HOME_ROUTE}></Redirect>
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps)(AppRouter);
