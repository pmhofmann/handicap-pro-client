import React, { Component } from "react";

class CourseCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.course.name}</h1>
        <h2>{this.props.course.county}</h2>
        <a href={this.props.course.url}>Club Website</a>
      </div>
    );
  }
}

export default CourseCard;
