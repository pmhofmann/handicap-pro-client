import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Signup from "./Signup";
import Login from "./Login";
import NewCourse from "./NewCourse";
import Courses from "./Courses";
import ScoreForm from "./ScoreForm";
import Account from "./Account";
import { login, getCurrentPlayer } from "./api";

import "./App.css";
const BASE_URL = `http://localhost:3000/`;
const PLAYERS_URL = `${BASE_URL}players/`;
const COURSES_URL = `${BASE_URL}courses/`;
const HOLES_URL = `${BASE_URL}holes/`;
const SCORECARDS_URL = `${BASE_URL}scorecards/`;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: null,
      course: {},
      courses: [],
      allHoles: [],
      allScorecards: [],
      scorecardCourse: null,
      scorecardHoles: [],
      scorecard: {},
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

  getCourses = () => {
    return fetch(COURSES_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ courses: data }));
  };

  getHoles = () => {
    return fetch(HOLES_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ allHoles: data }));
  };

  getScorecards = () => {
    return fetch(SCORECARDS_URL)
      .then(resp => resp.json())
      .then(data => this.setState({ allScorecards: data }));
  };

  getAllData = () => {
    this.getCourses()
      .then(this.getHoles)
      .then(this.getScorecards);
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      getCurrentPlayer(token)
        .then(player => {
          this.setState({ isLoggedIn: true, player: player });
        })
        .then(() => {
          this.getAllData();
        });
    }
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

  selectCourse = event => {
    event.preventDefault();
    console.log(event.target.value);

    let displayedHoles = this.state.allHoles.filter(
      hole => parseInt(hole.course_id) === parseInt(event.target.value)
    );
    this.setState({
      scorecardHoles: displayedHoles,
      scorecardCourse: event.target.value
    });
    this.totalYards();
  };

  selectCourseHoles = () => {
    console.log(
      this.state.allHoles.filter(
        hole => hole.course_id === this.state.scorecardCourse
      )
    );
    // console.log(courseHoles);
  };

  totalYards = () => {
    let total = this.state.scorecardHoles.reduce(function(tot, hole) {
      return tot + hole.yardage;
    }, 0);

    return total;
  };

  totalPar = () => {
    let total = this.state.scorecardHoles.reduce(function(tot, hole) {
      return tot + hole.par;
    }, 0);

    return total;
  };

  handleScorecardChange = event => {
    let scorecard = {};
    Object.assign(scorecard, this.state.scorecard);
    scorecard[event.target.name] = event.target.value;
    this.setState({ scorecard: scorecard });
  };

  updateHandicap = () => {
    let handicapIncrement = 0;
    let handicapMultiplier = 0;
    if (
      parseInt(document.getElementById("total_score").innerHTML) -
        this.state.player.hcp <=
      this.totalPar()
    ) {
      if (this.state.player.hcp < 6) {
        handicapIncrement = 0.1;
      } else if (6 <= this.state.player.hcp && this.state.player.hcp < 12) {
        handicapIncrement = 0.2;
      } else if (12 <= this.state.player.hcp && this.state.player.hcp < 18) {
        handicapIncrement = 0.3;
      } else if (18 <= this.state.player.hcp && this.state.player.hcp < 24) {
        handicapIncrement = 0.4;
      } else if (24 <= this.state.player.hcp && this.state.player.hcp < 36) {
        handicapIncrement = 0.5;
      }
      handicapMultiplier =
        this.totalPar() -
        parseInt(document.getElementById("total_score").innerHTML) -
        this.state.player.hcp;
    } else {
      handicapIncrement = -0.1;
      handicapMultiplier = 1;
    }

    let newHcp =
      Math.round(
        (this.state.player.hcp - handicapMultiplier * handicapIncrement) * 10
      ) / 10;
    let player = {
      id: this.state.player.id,
      email: this.state.player.email,
      hcp: newHcp,
      name: this.state.player.name,
      password: this.state.password_digest
    };

    let hcpConfigObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ player: player })
    };
    fetch(PLAYERS_URL + this.state.player.id, hcpConfigObj).then(data =>
      data.json()
    );
  };

  postScorecard = event => {
    event.preventDefault();
    this.updateHandicap();
    let scorecard = {
      course_id: this.state.scorecardCourse,
      player_id: this.state.player.id,
      score: parseInt(document.getElementById("total_score").innerHTML),
      date_played: document.getElementById("date").value
    };

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ scorecard: scorecard })
    };
    fetch(SCORECARDS_URL, configObj).then(data => data.json());
  };

  render() {
    return (
      <Router>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          handleLogOut={this.handleLogOut}
        />

        <Route
          path="/Account"
          render={() => (
            <Account
              getScorecards={this.getScorecards}
              courses={this.state.courses}
              allScorecards={this.state.allScorecards}
              handleChange={this.handleChange}
              player={this.state.player}
              isLoggedIn={this.state.isLoggedIn}
              handleLogin={this.handleLogin}
              handleLogOut={this.handleLogOut}
            />
          )}
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
          render={() => (
            <Courses
              getCourses={this.getCourses}
              courses={this.state.courses}
            />
          )}
        />
        <Route
          path="/PostScore"
          render={() => (
            <ScoreForm
              getScorecards={this.getScorecards}
              handleScorecardChange={this.handleScorecardChange}
              scorecard={this.state.scorecard}
              updateHandicap={this.updateHandicap}
              postScorecard={this.postScorecard}
              totalYards={this.totalYards}
              totalPar={this.totalPar}
              selectCourse={this.selectCourse}
              scorecardCourse={this.state.scorecardCourse}
              selectCourseHoles={this.state.selectCourseHoles}
              courses={this.state.courses}
              allHoles={this.allHoles}
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
