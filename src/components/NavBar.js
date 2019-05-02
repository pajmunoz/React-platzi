import React, { Component } from "react";
import confLogo from "../images/logo.svg";
import "./styles/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="contaier-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={confLogo} alt="" />
            <span className="font-weight-light">Conference</span>
            <span className="font-weight-bold">Badges</span>
          </a>
        </div>
      </div>
    );
  }
}
export default NavBar;
