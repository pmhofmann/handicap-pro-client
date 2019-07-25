import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import NewCourse from "./NewCourse";
import { login, getCurrentPlayer } from "./api";

import "./App.css";

const PLAYERS_URL = "http://localhost:3000/players";
const COURSES_URL = "http://localhost:3000/courses";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: null,
      course: {},
      isLoggedIn: false
    };
  }

  handleCourseChange = event => {
    let course = {};
    Object.assign(course, this.state.course);
    course[event.target.name] = event.target.value;
    this.setState({ course: course });
  };

  createCourse = event => {
    event.preventDefault();

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ course: this.state.course })
    };

    fetch(COURSES_URL, configObj).then(data => data.json());
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
    console.log("Hello Programmer");
    login(this.state.player.email, this.state.player.password).then(data => {
      if (data.error) {
        alert("something is wrong with your credentials");
        this.setState({ email: "", password: "" });
      } else {
        localStorage.setItem("token", data.jwt);
        debugger;
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
              createCourse={this.createCourse}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
