import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

class Footer extends Component<any> {
  state = {
    social_media: this.props.social_media
  };
  render() {
    return (
      <footer id="#contact">
        <div className="container">
          <div className="content-wrap">
            <a className="btn" href="#open-modal">Contact Me!</a>
            <div id="open-modal" className="modal-window">
                <div className="contactForm">
                  <a href="#" title="Close" className="modal-close">Close</a>
                  <h1>Keep in touch!</h1>
                  <div>
                    <small>I'll get back to you as quickly as possible</small>
                  </div>
                  <form action="#">
                    <input placeholder="Name" type="text" required />
                    <input placeholder="Email" type="email" required />
                    <input placeholder="Subject" type="text" required />
                    <textarea placeholder="Comment"></textarea>
                    <input className="formBtn" type="submit" />
                  </form>
              </div>
            </div>
            <h2 className="display-topic">Let's Keep in Touch!</h2>

            {/* Social media links. Add or remove any networks.*/}

            <div className="contact-info">
              {this.state.social_media.map((social_media: any) => (
                <a
                  key={"Social Media Link" + social_media.id}
                  href={social_media.link}
                >
                  <FontAwesomeIcon
                    key={"Social Media Icon" + social_media.id}
                    icon={social_media.icon}
                  />
                  <span
                    key={"Social Media Span" + social_media.id}
                    className="sr-only"
                  >
                    {social_media.text}
                  </span>
                </a>
              ))}
            </div>

            <p>Copyright 2018 by John Hellrung</p>
            <a
              role="button"
              aria-pressed="true"
              href="https://github.com/Hellrungj/Hellrungj.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              (View Source)
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
