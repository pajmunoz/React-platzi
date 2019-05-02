import React, { Component } from "react";
import NavBar from "../components/NavBar";
import './styles/Badges.css';
import confLogo from "../images/badge-header.svg";

class Badges extends Component {

  render() {
    return (
      <div>
          <NavBar />
          <div className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt=""/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
export default Badges;
