import React, { Component } from "react";
import Experience from "./experience";

class Experiences extends Component<any> {
  state = {
    experiences: this.props.experiences
  };
  render() {
    return (
      <section id="experince" className="work">
        <div className="content-wrap">
          <h2 className="display-topic">Experience:</h2>
          <hr />
          {this.state.experiences.map((experiences: any) => (
            <Experience
              key={"Experience" + experiences.id}
              title={experiences.title}
              location={experiences.location}
              date={experiences.date}
              points={experiences.points}
              demo={experiences.demo}
              source={experiences.source}
            />
          ))}
          <p style={{ textAlign: "center" }}>
            <a
              role="button"
              href="https://www.linkedin.com/in/johnjameshellrung/"
              className="btn btn-secondary btn-bg"
              target="_blank"
              rel="noopener noreferrer"
            >
              See my complete work history on LinkedIn
            </a>
          </p>
        </div>
      </section>
    );
  }
}

export default Experiences;
