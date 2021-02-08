import React from "react";
import "./Header.css";
import Navigation from "../../components/Navbar/Navbar";

const Header = ({ sideDrawerSwitch, clickChangeLang }) => {
  return (
    <div className="header-container">
      <Navigation
        sideDrawerSwitch={sideDrawerSwitch}
        languageChange={clickChangeLang}
      />
    </div>
  );
};
export default Header;
