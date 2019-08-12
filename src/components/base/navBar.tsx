import React, { Component } from "react";

class NavBar extends Component<any> {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          John J. Hellrung
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#about">
              About <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#skill">
              Skills
            </a>
            <a className="nav-item nav-link" href="#experince">
              Experience
            </a>
            <a className="nav-item nav-link" href="#project">
              Projects
            </a>
            <a className="nav-item nav-link" href="#education">
              Education
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
