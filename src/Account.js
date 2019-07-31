import React, { Component } from "react";
import ScoreElement from "./ScoreElement";

class Account extends Component {
  state = {
    playerScores: []
  };

  filterScorecards = () => {
    let displayedScorecards = this.props.allScorecards.filter(
      scorecard =>
        parseInt(scorecard.player_id) === parseInt(this.props.player.id)
    );
    this.setState({
      playerScores: displayedScorecards
    });
  };

  componentDidMount() {
    this.filterScorecards();
  }

  render() {
    return (
      <div>
        <p> {`Hi ${this.props.player.name}`} </p>
        <p> {`Your current handicap is: ${this.props.player.hcp}`}</p>

        <h2>Your Previous Rounds:</h2>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Course</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.playerScores.map((scorecard, index) => (
              <ScoreElement
                key={index}
                scorecard={scorecard}
                courses={this.props.courses}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Account;
