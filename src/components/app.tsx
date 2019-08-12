// eslint-disable-next-line
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./base/navBar";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects/projects";
import Experiences from "./experiences/experiences";
import Education from "./education";
import Footer from "./base/footer";

import "../assets/styles/app.scss";

//Question Data
import Data from "./../data/db.json";

class App extends Component<any> {
  state = {
    data: Data.data
  };

  render() {
    console.log(this.state.data);
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path={`/`}>
              <About about={this.state.data.about} />
              <Skills skills={this.state.data.skills} />
              <Experiences experiences={this.state.data.experiences} />
              <Projects projects={this.state.data.projects} />
              <Education education={this.state.data.education} />
            </Route>
          </Switch>
          </div>
          <Footer social_media={this.state.data.social_media} /> 
      </BrowserRouter>
    );
  }
}

export default App;
