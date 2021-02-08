import React from "react";
import { useState } from "react";
import "./Searchbar.css";

const Searchbar = ({ getInputSetter }) => {
  const [inputVal, setInputVal] = useState("");
  const [cross, setCross] = useState("hidden");
  const [placeHolder, setPlaceHolder] = useState("");

  const inputNotNull = (e) => {
    setInputVal(e);
    e ? setCross("visible") : setCross("hidden");
  };
  const clearInput = () => {
    setInputVal("");
    setCross("hidden");
    getInputSetter("");
  };
  const Search = () => {
    getInputSetter(inputVal);
  };
  return (
    <div className="wrapper">
      <img
        className="search-icon"
        src={require("../../../assets/img/mag-glass.png")}
        alt="mag-glass"
        onClick={Search}
      />
      <input
        value={inputVal}
        className="search"
        placeholder={placeHolder}
        type="text"
        onChange={(e) => inputNotNull(e.target.value)}
        onFocus={() => setPlaceHolder("Search...")}
        onBlur={() => setPlaceHolder("")}
      />
      <img
        className="clear-icon"
        src={require("../../../assets/img/cross.png")}
        alt="cross"
        style={{ visibility: cross }}
        onClick={clearInput}
      />
    </div>
  );
};
export default Searchbar;
