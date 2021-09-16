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
import ToTopButton from "./toTopButton";

//Question Data
import Data from "./../data/db.json";

const SVGWaves = `<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                      <defs>
                      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                      </defs>
                      <g class="parallax">
                      <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0,113,242,0.7" />
                      <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(125,84,155,0.5)" />
                      <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(23,84,155,0.3)" />
                      <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(23,84,155,1)" />
                      </g>
                  </svg>`


class App extends Component<any> {
  state = {
    data: Data.data
  };

  render() {
    console.log(this.state.data);
    return (
      <BrowserRouter>
        <NavBar />
        <h1 className="App-inner border border-white">Hello World 2</h1>
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
          <ToTopButton />
          <div dangerouslySetInnerHTML={{__html: SVGWaves}} />
          <Footer social_media={this.state.data.social_media} /> 
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
