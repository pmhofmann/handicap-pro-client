import React, { Component } from "react";

class ScoreElement extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.scorecard.date_played}</td>
        <td>{this.props.scorecard.course_id}</td>
        <td>{this.props.scorecard.score}</td>
      </tr>
    );
  }
}

export default ScoreElement;
