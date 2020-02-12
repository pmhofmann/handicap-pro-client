import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <div>
            <h2> {`Hi ${this.props.player.name}, you're now logged in`}</h2>
            <h2> {`Your current handicap is: ${this.props.player.hcp}`}</h2>
            <button onClick={this.props.handleLogOut}>Log Out</button>
          </div>
        ) : (
          <div>
            <h1>Log in</h1>
            <form class="ui form">
              <div class="field">
                <label htmlFor="email">
                  <b>Email: </b>
                </label>
                <input
                  type="email"
                  onChange={this.props.handleChange}
                  placeholder="Enter email"
                  name="email"
                />
              </div>
              <br />
              <div class="field">
                <label htmlFor="password">
                  <b>Password: </b>
                </label>
                <input
                  type="password"
                  onChange={this.props.handleChange}
                  placeholder="Enter Password"
                  name="password"
                />
              </div>
              <br />
              <button
                class="ui positive button"
                onClick={this.props.handleLogin}
                type="submit"
              >
                {" "}
                Login{" "}
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
