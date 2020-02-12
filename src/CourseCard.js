import React, { Component } from "react";

class CourseCard extends Component {
  render() {
    return (
      <div class="column">
        <div class="ui raised card">
          <div class="content">
            <div class="header">{this.props.course.name}</div>
            <div class="meta">{this.props.course.county}</div>
            <a href={this.props.course.url}>Club Website</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;
