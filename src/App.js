import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import NewCourse from "./NewCourse";
import Courses from "./Courses";
import ScoreForm from "./ScoreForm";
import { login, getCurrentPlayer } from "./api";

import "./App.css";
const BASE_URL = `http://localhost:3000/`;
const PLAYERS_URL = `${BASE_URL}players`;
const COURSES_URL = `${BASE_URL}courses`;
const HOLES_URL = `${BASE_URL}holes`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: null,
      course: {},
      courses: [],
      scorecardHoles: [],
      holes: [
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null },
        { par: null, yardage: null }
      ],
      isLoggedIn: false
    };
  }

  componentDidMount() {
    fetch(COURSES_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ courses: data }));
  }

  handleCourseChange = event => {
    let course = {};
    Object.assign(course, this.state.course);
    course[event.target.name] = event.target.value;
    this.setState({ course: course });
  };

  createCourse = event => {
    event.preventDefault();
    let course = { ...this.state.course };
    course.holes = [];
    this.state.holes.forEach((hole, index) => {
      hole.hole_number = index + 1;
      course.holes.push(hole);
    });

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ course: course })
    };

    fetch(COURSES_URL, configObj).then(data => data.json());
  };

  handleHoleChange = event => {
    let holeNumber = event.target.name.split("_")[0].replace("hole", "");
    let attribute = event.target.name.split("_")[1];
    let holes = [...this.state.holes];
    holes[parseInt(holeNumber) - 1][attribute] = event.target.value;
    this.setState({ holes: holes });
  };

  createPlayer = event => {
    event.preventDefault();

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ player: this.state.player })
    };

    fetch(PLAYERS_URL, configObj).then(data => data.json());
  };

  handleChange = event => {
    let player = {};
    Object.assign(player, this.state.player);
    player[event.target.name] = event.target.value;
    this.setState({ player: player });
  };

  handleLogin = event => {
    event.preventDefault();
    login(this.state.player.email, this.state.player.password).then(data => {
      if (data.error) {
        alert("something is wrong with your credentials");
        this.setState({ email: "", password: "" });
      } else {
        localStorage.setItem("token", data.jwt);
        this.setState({ isLoggedIn: true, player: data.player });
        // this.getUserData();
      }
    });
  };

  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      player: null,
      isLoggedIn: false
    });
  };

  getHolesFromServer = () => {
    fetch(HOLES_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ scorecardHoles: data }));
  };

  render() {
    return (
      <Router>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          handleLogOut={this.handleLogOut}
        />
        <Route
          path="/Login"
          render={() => (
            <Login
              handleChange={this.handleChange}
              player={this.state.player}
              isLoggedIn={this.state.isLoggedIn}
              handleLogin={this.handleLogin}
              handleLogOut={this.handleLogOut}
            />
          )}
        />
        <Route
          path="/Signup"
          render={() => (
            <Signup
              player={this.state.player}
              isLoggedIn={this.state.isLoggedIn}
              createPlayer={this.createPlayer}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          path="/NewCourse"
          render={() => (
            <NewCourse
              course={this.state.course}
              handleCourseChange={this.handleCourseChange}
              handleHoleChange={this.handleHoleChange}
              createCourse={this.createCourse}
              holes={this.state.holes}
            />
          )}
        />
        <Route
          path="/Courses"
          render={() => <Courses courses={this.state.courses} />}
        />
        <Route
          path="/PostScore"
          render={() => (
            <ScoreForm
              getHolesFromServer={this.getHolesFromServer}
              scorecardHoles={this.state.scorecardHoles}
              isLoggedIn={this.state.isLoggedIn}
              handleLogin={this.handleLogin}
              handleLogOut={this.handleLogOut}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
