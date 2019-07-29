import React, { Component } from "react";

class Player extends Component {
  render() {
    return (
      <div>
        <h1>Your account details</h1>
        <p>Hello {this.props.player.name}</p>
        <p>Email: {this.props.player.email}</p>
        <p>Your Current Handicap is: {this.props.player.hcp}</p>
      </div>
    );
  }
}

export default Player;
