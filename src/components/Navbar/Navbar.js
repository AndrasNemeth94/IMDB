import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ToggleButton from "../Navbar/ToggleButton/ToggleButton";
import NavList from "./NavList/NavList";

const Navigation = ({ sideDrawerSwitch, languageChange }) => {
  const hunIMG = "hu-ic.png";
  const enIMG = "en-ic.png";
  const [flagIMG, setFlagIMG] = useState(hunIMG);

  const switchFlagIMG = () => {
    switch (flagIMG) {
      case hunIMG:
        setFlagIMG(enIMG);
        break;
      case enIMG:
        setFlagIMG(hunIMG);
        break;
      default:
        setFlagIMG(hunIMG);
    }
  };
  return (
    <nav className="navbar">
      <div>
        <ToggleButton click={sideDrawerSwitch} />
      </div>
      <Link to="/">
        <img
          className="nav-logo"
          src={require("../../assets/img/LoMLM.png")}
          alt="logo"
        ></img>
      </Link>
      <button
        className="set-lang"
        onClick={(event) => {
          languageChange();
          switchFlagIMG();
        }}
      >
        <img
          className="flag"
          src={require(`../../assets/img/${flagIMG}`)}
          alt="flag"
        />
      </button>
      <div className="nav-spacer "></div>
      <NavList />
    </nav>
  );
};
export default Navigation;
