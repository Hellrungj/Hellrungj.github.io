import React, { Component } from 'react';

class Footer extends Component {
    state = { 
      social_media: this.props.social_media 
    }
    render() { 
        return ( 
          <footer id="contact">
            <div className="content-wrap">
              <h2 className="display-topic">Let's Keep in Touch!</h2>

              {/* Social media links. Add or remove any networks.*/}
              <div className="contact-info">
                {this.state.social_media.map( social_media => (
                  <a key={social_media.id} href={social_media.link}>
                  <i key={social_media.id} className={social_media.icon} aria-hidden="true"></i>
                  <span key={social_media.id} className="sr-only">{social_media.text}</span>
                </a>
                ))}
              </div>

              <p>Copyright 2018 by John Hellrung</p>
            </div>
          </footer>

         );
    }
}
 
export default Footer;