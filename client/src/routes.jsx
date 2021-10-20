import React from "react";

import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import Login from "./pages/LogIn";
import Profile from "./pages/Profile";
import WithHeaderAndFooter from "./hoc/WithHeaderAndFooter";
import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  SIGNUP_ROUTE,
  LOGIN_ROUTE,
  BOOKS_ROUTE,
  RECIPES_ROUTE,
  MY_BOOKS_ROUTE,
  MY_RECIPES_ROUTE,
  MY_SETTINGS_ROUTE,
} from "./utils/constants";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: () => (
      <WithHeaderAndFooter>
        <Home />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: SIGNUP_ROUTE,
    Component: SignUp,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: BOOKS_ROUTE,
    Component: () => (
      <WithHeaderAndFooter>
        <Search routePath={BOOKS_ROUTE} />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: RECIPES_ROUTE,
    Component: () => (
      <WithHeaderAndFooter>
        <Search routePath={RECIPES_ROUTE} />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: MY_BOOKS_ROUTE,
    Component: () => (
      <WithHeaderAndFooter>
        <Profile routePath={MY_BOOKS_ROUTE} />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: MY_RECIPES_ROUTE,
    Component: () => (
      <WithHeaderAndFooter>
        <Profile routePath={MY_RECIPES_ROUTE} />
      </WithHeaderAndFooter>
    ),
  },
  {
    path: MY_SETTINGS_ROUTE,
    Component: () => (
      <WithHeaderAndFooter>
        <Profile routePath={MY_SETTINGS_ROUTE} />
      </WithHeaderAndFooter>
    ),
  },
];
