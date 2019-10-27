import React, { Component } from "react";


class NavBar extends Component<any> {

  render() {
    return (
      <nav>
        <div className="logo">
          <a className="brand"> John J. Hellrung </a>
        </div>
        <ul className="nav-links">
          <li>
            <i className="icon fas fa-address-card"></i>
            <a href="#about">About</a>
          </li>
          <li>
            <i className="icon fas fa-tools"></i>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <i className="icon fas fa-briefcase"></i>
            <a href="#expereince">Experience</a>
          </li>
          <li> 
            <i className="icon fas fa-project-diagram"></i>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <i className="icon fas fa-graduation-cap"> </i>
            <a href="#education">Education</a>
          </li>
          <li>
            <i className="icon fas fa-cog"> </i>
            <a href="#setting">Setting </a>
          </li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
