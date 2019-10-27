import React, { Component } from "react";
import ReactDOM from "react-dom";

class Event extends Component {
  state = {
    transform: 0,
    node: NaN
  }
// When the user clicks on the button, scroll to the top of the document
  navSlide:any = (node: any) => {
    let burger = node.querySelector('.burger');
    let nav = node.querySelector('.nav-links');
    let navLinks = node.querySelectorAll('.nav-links li');
    let download = node.querySelector('.download');
    if(burger){
      burger.addEventListener('click', () => {
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
    

        // Animate download
        if (download.style.animation) {
          download.style.animation = '';
        } else {
          download.style.animation = `downloadFade 0.5s ease forwards ${6 / 7 + 0.3}s`;
        }
      
        // Burger Animation
        burger.classList.toggle('toggle');

    });
  }

  }  
// When the user scrolls down 1600px from the top of the document, show the button

scrollFunction:any = (node:any,toTopBtn:any) => {
  if (window.pageYOffset > 1600) {
    toTopBtn.style.visibility = "visible";
  } else {
    toTopBtn.style.visibility = "hidden";
  }
}

componentDidMount(){
    const node = ReactDOM.findDOMNode(this);
    if (node instanceof HTMLElement) {
      this.navSlide(node);
      const toTopBtn:any = document.getElementById("toTopButton");
      window.addEventListener('scroll', this.scrollFunction(node,toTopBtn));

      toTopBtn.addEventListener('click', (node:any) => {
        node.body.scrollTop = 0; // For Safari
        node.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      });
    } 
  }
render(){
  return(
    <a id="toTopButton"></a>
  )
}
}

export default Event;