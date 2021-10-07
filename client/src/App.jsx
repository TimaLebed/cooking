import React from "react";
import { Global } from "@emotion/react";
import { BrowserRouter as Router} from "react-router-dom";

import AppRouter from "./AppRouter";
import { globalStyles, AppWrapper } from "./App.styled";

export const App = () => {
  return (
    <>
      <Router>
        <AppWrapper>
          <AppRouter></AppRouter>
        </AppWrapper>
      </Router>
      <Global styles={globalStyles} />
    </>
  );
};
