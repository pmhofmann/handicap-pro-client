import React, { Component } from "react";
import CourseCard from "./CourseCard";

class Courses extends Component {
  sortCourses = () => {
    let sortedCourses = this.props.courses.sort(function(a, b) {
      var key1 = a.name;
      var key2 = b.name;

      if (key1 < key2) {
        return -1;
      } else if (key1 == key2) {
        return 0;
      } else {
        return 1;
      }
    });
    this.setState({ courses: sortedCourses });
  };

  componentDidMount() {
    this.props.getCourses().then(this.sortCourses);
  }
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
