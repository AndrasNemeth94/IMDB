import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import translate from "../../../i18n/messages/translate";

const SideDrawer = (props) => (
  <nav className="sidedrawer-container">
    <ul className="sidedrawer-mobile-links">
      <Link to="/" className="sidedrawer-mobile-link">
        <li>{translate("Home")}</li>
      </Link>
      <Link to="/Aboutus" className="sidedrawer-mobile-link">
        <li>{translate("About")}</li>
      </Link>
      <Link to="/Login" className="sidedrawer-mobile-link">
        <li>{translate("Login")}</li>
      </Link>
    </ul>
  </nav>
);
export default SideDrawer;
