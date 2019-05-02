import React, { Component } from "react";
import NavBar from "../components/NavBar";
import confLogo from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends Component {
    state={
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'@'
        }
    };
    handleChange = e =>{ //levantamos state desde form asi el state se comparte con badge y badgeform
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value,
            }
        })
    }
    setState: any;
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img src={confLogo} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-6">
            <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
