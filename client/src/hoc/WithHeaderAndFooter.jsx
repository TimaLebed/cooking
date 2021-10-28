import React from "react";
import PropTypes from "prop-types";

import Header from "../shared/Header";
import Footer from "../shared/Footer";

const WithHeaderAndFooter = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

WithHeaderAndFooter.propTypes = {
  children: PropTypes.node,
};

WithHeaderAndFooter.defaultProps = {
  children: null,
};

export default WithHeaderAndFooter;
