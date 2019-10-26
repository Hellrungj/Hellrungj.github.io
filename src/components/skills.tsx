import React, { Component } from "react";

class Skills extends Component<any> {
  state = {
    languages: this.props.skills.languages,
    frameworks: this.props.skills.frameworks,
    systemsTools: this.props.skills.systemsTools
  };
  render() {
    return (
      <section id="skill" className="skill">
        <div className="content-wrap">
          <h2 className="display-topic">Skills:</h2>
          <hr />
          <div className="display-skills">
            <div className="skill-item">
              <h3>Languages:</h3>
              <p>{this.state.languages}</p>
            </div>
            <div className="skill-item">
              <h3>Frameworks:</h3>
              <p>{this.state.frameworks}</p>
            </div>
            <div className="skill-item">
              <h3>Systems &amp; Tools:</h3>
              <p>{this.state.systemsTools}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
