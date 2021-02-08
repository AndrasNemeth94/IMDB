import React from "react";
import "./NavList.css";
import { Link } from "react-router-dom";
import translate from "../../../i18n/messages/translate";

const NavList = () => {
  return (
    <ul className="nav-links">
      <Link to="/" className="nav-link">
        <li className="nav-link-element">{translate("Home")}</li>
      </Link>
      <Link to="/Aboutus" className="nav-link">
        <li className="nav-link-element">{translate("About")}</li>
      </Link>
      <Link to="/Login" className="nav-link">
        <li className="nav-link-element">{translate("Login")}</li>
      </Link>
    </ul>
  );
};
export default NavList;
