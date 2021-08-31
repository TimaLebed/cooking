import React from "react";
import "./index.css";

function Button({ children }) {
  return (
    <button className="btn" type="button">{ children }</button>
  )
}

export default Button;
