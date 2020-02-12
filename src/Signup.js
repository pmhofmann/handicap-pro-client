import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <h1>Sign up </h1>
        <h3>Create your HandicapPro account</h3>
        <hr />
        <form class="ui form" onSubmit={this.props.createPlayer}>
          <div class="field">
            <label htmlFor="email">
              <b>Email Address: </b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={this.props.handleChange}
            />
          </div>
          <div class="field">
            <label htmlFor="password">
              <b>Password: </b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={this.props.handleChange}
            />
          </div>
          <div class="field">
            <label htmlFor="name">
              <b>Name: </b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={this.props.handleChange}
            />
          </div>
          <div class="field">
            <label htmlFor="hcp">
              <b>Initial handicap: </b>
            </label>
            <input
              type="number"
              placeholder="36"
              name="hcp"
              onChange={this.props.handleChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
