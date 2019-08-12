// eslint-disable-next-line
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./base/navBar";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects/projects";
import Experiences from "./experiences/experiences";
import Education from "./education";
import Footer from "./base/footer";

import "../assets/styles/app.css";

//Question Data
import Data from "./../data/db.json";

class App extends Component {
  state = {
    data: Data.data
  };

  render() {
    console.log(this.state.data);
    return (
      <Router exact path={`/`}>
        <div>
          <NavBar />
          <main className="container">
            <About about={this.state.data.about} />
            <Skills skills={this.state.data.skills} />
            <Experiences experiences={this.state.data.experiences} />
            <Projects projects={this.state.data.projects} />
            <Education education={this.state.data.education} />
            <Footer social_media={this.state.data.social_media} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
