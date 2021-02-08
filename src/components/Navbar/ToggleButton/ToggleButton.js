import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({ click }) => (
  <button onClick={click} className="toggle-button-container">
    <div className="togllebutton-separator-a" />
    <div className="togllebutton-separator-b" />
  </button>
);
export default ToggleButton;
