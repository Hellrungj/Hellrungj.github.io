import React, { Component } from "react";

class toTopButton extends Component {

  scrollFunction = () => {
    const toTopBtn = document.getElementById("toTopButton");
    if (toTopBtn){
      //console.log("Scroll: " + document.body.scrollTop, document.documentElement.scrollTop) For Debuging
      if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
        toTopBtn['style'].visibility = "visible";
      } else {
        toTopBtn['style'].visibility = "hidden";
      }
    }
    else{
      console.log('burger Status: ' + toTopBtn);
    }
  }

  toTop = () => {
    const toTopBtn = document.getElementById("toTopButton");

    // When the user scrolls down 1600px from the top of the document, show the button
    if (toTopBtn){

    // When the user clicks on the button, scroll to the top of the document
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    }
    else{
      console.log('burger Status: ' + toTopBtn);
    }
    
  }

  render(){
      window.onscroll = () => {this.scrollFunction()};
      return(
        <a id="toTopButton" onClick={this.toTop}></a>
      )
    }
  }

export default toTopButton;