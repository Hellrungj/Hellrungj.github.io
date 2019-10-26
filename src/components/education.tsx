import React, { Component } from "react";

class Education extends Component<any> {
  state = {
    title: this.props.education.title,
    date: this.props.education.date,
    location: this.props.education.location
  };
  render() {
    return (
      <section id="#education" className="education">
        <div className="content-wrap">
          <h2 className="section-title">Education:</h2>
          <hr />
          <div className="title">
            <h3>{this.state.title}</h3>
          </div>
          <div className="date">
            <p>{this.state.date}</p>
          </div>
          <i className="school">{this.state.location}</i>
        </div>
      </section>
    );
  }
}

export default Education;
