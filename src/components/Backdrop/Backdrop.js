import React from "react";
import "./Backdrop.css";

const Backdrop = ({ backdropClick }) => {
  return <div className="backdrop-container" onClick={backdropClick} />;
};
export default Backdrop;
