import React, { Component } from "react";

class Project extends Component<any> {
  state = {
    title: this.props.title,
    date: this.props.date,
    company: this.props.company,
    points: this.props.points,
    demo: this.props.demo,
    source: this.props.source
  };
  render() {
    return (
      <div className="project-item">
        <div>
          <div className="title">
            <h3>{this.state.title}</h3>
          </div>

          <div className="date">
            <p>{this.state.date}</p>
          </div>
        </div>
        <i className="company">{this.state.company}</i>
        <ul className="points">
          {this.state.points.map((points: any) => (
            <li key={points.id}>{points.text}</li>
          ))}
        </ul>
        {this.state.demo && this.state.source && (
          <div className="demo-source" style={{ textAlign: "center" }}>
            <a
              role="button"
              aria-pressed="true"
              className="btn"
              href={this.state.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
            <a
              role="button"
              aria-pressed="true"
              className="btn"
              href={this.state.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
