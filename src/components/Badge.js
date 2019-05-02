import React, { Component } from "react";
import confLogo from "../images/badge-header.svg";
import photoThumb from "../images/me.jpg";
import "./styles/Badge.css";

class Badge extends Component {
    props: any;
  render() {
    const firstName = "Pablo";
    const lastName = "Jara";
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={photoThumb} alt="Avatar" />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#platzconf</div>
      </div>
    );
  }
}
export default Badge;
