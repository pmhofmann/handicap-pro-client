import React, { Component } from "react";
import CourseCard from "./CourseCard";

class Courses extends Component {
  render() {
    return (
      <div>
        {this.props.courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    );
  }
}

export default Courses;
