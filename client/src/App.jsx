import React from "react";
import { Global } from "@emotion/react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./AppRouter";
import { globalStyles, AppWrapper } from "./App.styled";

const App = () => (
  <>
    <Router>
      <AppWrapper>
        <AppRouter />
      </AppWrapper>
    </Router>
    <Global styles={globalStyles} />
  </>
);

export default App;
