import React, { Component } from "react";

class NewCourse extends Component {
  render() {
    return (
      <div>
        <h1>Enter Course Details</h1>
        <div class="ui form">
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

          <label htmlFor="url">
            <b>Course Website: </b>
          </label>
          <input
            type="text"
            onChange={this.props.handleCourseChange}
            placeholder="Enter url"
            name="url"
          />
          <br />
          <br />

          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 1">
                <b>Hole 1: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole1_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole1_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 2">
                <b>Hole 2: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole2_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole2_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 3">
                <b>Hole 3: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole3_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole3_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 4">
                <b>Hole 4: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole4_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole4_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 5">
                <b>Hole 5: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole5_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole5_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 6">
                <b>Hole 6: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole6_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole6_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 7">
                <b>Hole 7: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole7_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole7_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 8">
                <b>Hole 8: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole8_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole8_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 9">
                <b>Hole 9: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole9_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole9_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 10">
                <b>Hole 10: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole10_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole10_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 11">
                <b>Hole 11: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole11_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole11_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 12">
                <b>Hole 12: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole12_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole12_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 13">
                <b>Hole 13: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole13_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole13_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 14">
                <b>Hole 14: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole14_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole14_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 15">
                <b>Hole 15: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole15_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole15_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 16">
                <b>Hole 16: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole16_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole16_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 17">
                <b>Hole 17: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole17_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole17_par"
              />
            </div>
          </div>
          <br />
          <div class="inline fields">
            <div class="three wide field">
              <label htmlFor="Hole 18">
                <b>Hole 18: </b>
              </label>
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="yds"
                name="hole18_yardage"
              />
            </div>
            <div class="two wide field">
              <input
                type="number"
                onChange={this.props.handleHoleChange}
                placeholder="par"
                name="hole18_par"
              />
            </div>
          </div>
          <br />

          <button
            class="ui positive button"
            onClick={this.props.createCourse}
            type="submit"
          >
            {" "}
            Add Course{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default NewCourse;
