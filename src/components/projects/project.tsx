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
      <div>
        <div>
          <div className="col-narrow">
            <h3>{this.state.title}</h3>
          </div>

          <div className="col-wide project-description">
            <p>{this.state.date}</p>
          </div>
        </div>
        <i>{this.state.company}</i>
        <ul>
          {this.state.points.map((points: any) => (
            <li key={points.id}>{points.text}</li>
          ))}
        </ul>
        {this.state.demo && this.state.source && (
          <div style={{ textAlign: "center" }}>
            <a
              role="button"
              aria-pressed="true"
              className="btn btn-primary btn-sm"
              href={this.state.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
            <a
              role="button"
              aria-pressed="true"
              className="btn btn-secondary btn-sm"
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
