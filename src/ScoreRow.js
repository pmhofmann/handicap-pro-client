import React, { Component } from "react";

class ScoreRow extends Component {
  render() {
    // debugger;
    return (
      <tr>
        <td>{this.props.hole.hole_number}</td>
        <td>{this.props.hole.yardage}</td>
        <td>{this.props.hole.par}</td>
        <td>
          <input
            type="number"
            placeholder="score"
            name={this.props.hole.hole_number}
            min="1"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
        </td>
      </tr>
    );
  }
}

export default ScoreRow;
