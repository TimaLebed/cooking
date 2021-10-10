import React from "react";
import PropTypes from "prop-types";

import { LogoWrapper, LogoImg, LogoTitle } from "./index.styled";

const Logo = ({ isFooter }) => (
  <LogoWrapper>
    <LogoImg />
    <LogoTitle isFooter={isFooter}>
      <span>Feed</span>
      <span>me</span>
    </LogoTitle>
  </LogoWrapper>
);

Logo.propTypes = {
  isFooter: PropTypes.bool,
};

Logo.defaultProps = {
  isFooter: false,
};

export default Logo;
