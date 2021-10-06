import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
  const isAuth = false;

  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          <Route key={path} path={path} component={Component} exact></Route>;
          console.log(path)
        })}
      {publicRoutes.map(({ path, Component }) => {
        <Route key={path} path={path} component={Component} exact></Route>;
      })}
    </Switch>
  );
};

export default AppRouter;
