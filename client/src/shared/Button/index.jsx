import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./index.styled";

const Button = ({ inputHome, details, children }) => {
  return (
    <StyledButton inputHome={inputHome} details={details}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  inputHome: PropTypes.bool,
  details: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  inputHome: false,
  details: false,
  children: null,
};

export default Button;
