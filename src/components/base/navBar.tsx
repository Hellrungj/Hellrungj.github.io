import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component<any> {
  state = {
    menuItems: [
      {
        icon: "icon fas fa-address-card",
        link: "#about",
        text: "About"
      },
      {
        icon: "icon fas fa-tools",
        link: "#skiils",
        text: "Skiils"
      },
      {
        icon: "icon fas fa-briefcase",
        link: "#experience",
        text: "Experience"
      },
      {
        icon: "icon fas fa-project-diagram",
        link: "#projects",
        text: "Projects"
      },
      {
        icon: "icon fas fa-graduation-cap",
        link: "#education",
        text: "Education"
      },
      {
        icon: "icon fas fa-cog",
        link: "#setting",
        text: "Setting"
      }
    ]
  }

  selectBarMenu = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const download = document.querySelector('.download');
    return {burger, nav, navLinks,download}
  }

  navBarMenu = ()=>{
    console.log('The button was clicked.');
    const {burger, nav, navLinks,download} = this.selectBarMenu()
    console.log('Status: ' + burger, nav, navLinks,download);
    if (burger instanceof HTMLElement) {
        if (nav instanceof HTMLElement) {
          // Toggle Nav   
          nav.classList.toggle('nav-active');

          // Animate Links
          navLinks.forEach((link:any, index:any) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
          });
        }
        else{
          console.log('burger Status: ' + nav);
        }

        if (download instanceof HTMLElement) {
          // Animate download
          if (download['style'].animation) {
            download['style'].animation = '';
          } else {
            download['style'].animation = `downloadFade 0.5s ease forwards ${6 / 7 + 0.3}s`;
          }
        }
        else{
          console.log('burger Status: ' + burger);
        };

        // Burger Animation
        burger.classList.toggle('toggle');
    }
    else{
      console.log('burger Status: ' + burger);
    };
  }

  render() {
    return (
      <nav>
        <div className="logo">
          <a className="brand"> John J. Hellrung </a>
        </div>
        <ul className="nav-links">
          {this.state.menuItems.map((items: any, index) => (
            <li>
              <i className={items.icon}></i>
              <a href={items.link}>{items.text}</a>
            </li>
          ))}
        </ul>
        {/*burgerButton()*/}
        <div className="burger" onClick={this.navBarMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
