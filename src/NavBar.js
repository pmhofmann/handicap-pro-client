import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return this.props.isLoggedIn ? (
      <div className="usernav">
        <NavLink to="/Account"> Account</NavLink>
        <NavLink to="/Login" onClick={this.props.handleLogOut}>
          Logout
        </NavLink>
        <NavLink to="/NewCourse"> Add Course</NavLink>
      </div>
    ) : (
      <div className="usernav">
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Signup"> Signup</NavLink>
      </div>
    );
  }
}

export default NavBar;
