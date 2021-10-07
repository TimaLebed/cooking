import React from "react";

import Header from "../shared/Header";
import { Footer } from "../shared/Footer";

export const WithHeaderAndFooter = ({ children }) => (
  <>
    <Header></Header>
    {children}
    <Footer></Footer>
  </>
);
