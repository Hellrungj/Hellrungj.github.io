import React, { Component } from "react";
import Project from "./project";

class Projects extends Component<any> {
  state = {
    projects: this.props.projects
  };
  render() {
    return (
      <section id="project" className="project">
        <div className="content-wrap">
          <h2 className="display-topic">Projects:</h2>
          <hr />
          {this.state.projects.map((projects: any) => (
            <Project
              key={"Project" + projects.id}
              title={projects.title}
              date={projects.date}
              company={projects.company}
              points={projects.points}
              demo={projects.demo}
              source={projects.source}
            />
          ))}
          <p style={{ textAlign: "center" }}>
            See my complete project history on{" "}
            <a
              href="https://github.com/Hellrungj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            or{" "}
            <a
              href="https://bitbucket.org/hellrungj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bitbucket
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default Projects;
