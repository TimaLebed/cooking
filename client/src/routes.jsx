import React from "react";

import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import Login from "./pages/LogIn";

import { WithHeaderAndFooter } from "./hoc/WithHeaderAndFooter";

import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  SIGNUP_ROUTE,
  LOGIN_ROUTE,
  SEARCH_ROUTE,
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
        <Home></Home>
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
    path: SEARCH_ROUTE,
    Component: () => (
      <WithHeaderAndFooter>
        <Search></Search>
      </WithHeaderAndFooter>
    ),
  },
];
