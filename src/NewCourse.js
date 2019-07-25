import React, { Component } from "react";

class NewCourse extends Component {
  render() {
    return (
      <div>
        <h1>Enter Course Details</h1>
        <form>
          <label htmlFor="name">
            <b>Course Name: </b>
          </label>
          <input
            type="text"
            onChange={this.props.handleCourseChange}
            placeholder="Enter Course Name"
            name="name"
          />
          <br />
          <label htmlFor="county">
            <b>County: </b>
          </label>
          <input
            type="text"
            onChange={this.props.handleCourseChange}
            placeholder="Enter County"
            name="county"
          />
          <br />

          <label htmlFor="yardage">
            <b>Yardage: </b>
          </label>
          <input
            type="number"
            onChange={this.props.handleCourseChange}
            placeholder="Enter Yardage"
            name="yardage"
          />
          <br />

          <label htmlFor="par">
            <b>Par: </b>
          </label>
          <input
            type="number"
            onChange={this.props.handleCourseChange}
            placeholder="Enter Par"
            name="par"
          />
          <br />

          <label htmlFor="postcode">
            <b>Postcode: </b>
          </label>
          <input
            type="text"
            onChange={this.props.handleCourseChange}
            placeholder="Enter Postcode"
            name="postcode"
          />
          <br />

          <button onClick={this.props.createCourse} type="submit">
            {" "}
            Add Course{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default NewCourse;
