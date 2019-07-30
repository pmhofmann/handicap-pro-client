import React, { Component } from "react";
import ScoreRow from "./ScoreRow";

class ScoreForm extends Component {
  componentDidMount() {
    this.props.getHolesFromServer();
  }
  render() {
    return (
      <div>
        <h2>Course Selection goes here</h2>
        <table>
          <thead>
            <tr>
              <th>Hole</th>
              <th>Yards</th>
              <th>Par</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.props.scorecardHoles.map((hole, index) => (
              <ScoreRow key={index} hole={hole} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ScoreForm;
