import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Log in</h1>
        {this.props.isLoggedIn ? (
          <div>
            <p> {`Hi ${this.props.player.name}, you're now logged in`}</p>
            <p> {`Your current handicap is: ${this.props.player.handicap}`}</p>
            <button onClick={this.props.handleLogOut}>Log Out</button>
          </div>
        ) : (
          <form>
            <label htmlFor="email">
              <b>Email: </b>
            </label>
            <input
              type="email"
              onChange={this.props.handleChange}
              placeholder="Enter email"
              name="email"
            />
            <br />
            <label htmlFor="password">
              <b>Password: </b>
            </label>
            <input
              type="password"
              onChange={this.props.handleChange}
              placeholder="Enter Password"
              name="password"
            />
            <br />
            <button onClick={this.props.handleLogin} type="submit">
              {" "}
              Login{" "}
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Login;
