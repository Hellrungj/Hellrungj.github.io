import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <section id="skill" className="skill">
      <div className="content-wrap">
        <h2 className="display-topic">Skills:</h2>
        <hr/>
        <div className="display-skills">
          <div className="display-skills-items">
            <h3>Languages:</h3>
            <p>Python, JavaScript, Ruby, C#, HTML, CSS, SQL</p>
          </div>
          <div className="display-skills-items">
            <h3>Frameworks:</h3> 
            <p> Flask, Django, Node.js, React, Express, Ruby on Rails</p>
          </div>
          <div className="display-skills-items">
            <h3> Systems & Tools:</h3> 
            <p> Git, Google Cloud Platform, PowerShell, Bash</p>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default Skills;
