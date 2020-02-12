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

  sortScores = () => {
    let sortedScores = this.state.playerScores.sort(function(a, b) {
      var key1 = a.date_played;
      var key2 = b.date_played;

      if (key1 < key2) {
        return -1;
      } else if (key1 === key2) {
        return 0;
      } else {
        return 1;
      }
    });
    this.setState({ playerScores: sortedScores });
  };

  componentDidMount() {
    this.props
      .getScorecards()
      .then(this.filterScorecards)
      .then(this.sortScores);
  }

  render() {
    return (
      <div>
        <h1> {`Hi ${this.props.player.name}`} </h1>
        <h2> {`Your current handicap is: ${this.props.player.hcp}`}</h2>

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
