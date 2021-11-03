import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./index.styled";

const ButtonCreate = ({ children, setActive }) => {
  const handelClick = () => {
    setActive(true);
  }

  return (
    <StyledButton onClick={handelClick}>
      {children}
    </StyledButton>
  );
};

ButtonCreate.propTypes = {
  children: PropTypes.node,
  setActive: PropTypes.func,
};

ButtonCreate.defaultProps = {
  children: null,
  setActive: () => {},
};

export default ButtonCreate;
