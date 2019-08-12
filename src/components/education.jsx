import React, { Component } from "react";

class Education extends Component {
  state = {
    title: this.props.education.title,
    date: this.props.education.date,
    location: this.props.education.location
  };
  render() {
    return (
      <section id="education" className="education">
        <div className="content-wrap">
          <h2 className="display-topic">Education:</h2>
          <hr />
          <div className="col-narrow">
            <h3>{this.state.title}</h3>
          </div>
          <div className="col-wide education-description">
            <p>{this.state.date}</p>
          </div>
          <i>{this.state.location}</i>
        </div>
      </section>
    );
  }
}

export default Education;
