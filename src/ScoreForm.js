import React, { Component } from "react";
import ScoreRow from "./ScoreRow";

class ScoreForm extends Component {
  state = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    });
  };

  totalScore = () => {
    // let scoreInputs = document.getElementsByName("score");
    let total = 0;
    Object.values(this.state).forEach(score => {
      total += score;
    });
    return total ? total : 0;
  };

  render() {
    return (
      <div>
        <h1>Post Score</h1>
        <label htmlFor="course_id">
          <b>Course Played: </b>
        </label>
        <select onChange={this.props.selectCourse} name="course_id">
          <option value="">--Please select a Course--</option>
          {this.props.courses.map(course => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
        <label htmlFor="date">
          <b>Date Played: </b>
        </label>
        <input type="date" placeholder="Date Played" id="date" />
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
              <ScoreRow
                key={index}
                hole={hole}
                inputValue={this.state[hole.hole_number]}
                handleInputChange={this.handleInputChange}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th id="total" colSpan="1">
                Total :
              </th>
              <td>{this.props.totalYards()}</td>
              <td>{this.props.totalPar()}</td>
              <td onChange={this.props.handleScorecardChange} id="total_score">
                {this.totalScore()}
              </td>
            </tr>
          </tfoot>
        </table>
        <button onClick={this.props.postScorecard}>Post Scorecard</button>
      </div>
    );
  }
}

export default ScoreForm;
