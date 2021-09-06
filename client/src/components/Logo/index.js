import React from "react";
import "./index.css";

function Logo(props) {
  return (
    <div className="logo">
      <div className="logo__img"></div>
      <div className="logo__title">
        <span className={`${props.footer ? "logo-footer" : "logo-header"}`}>Feed</span>
        <span>me</span>
      </div>
    </div>
  );
}

export default Logo;
