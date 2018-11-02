import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas )

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
                  <FontAwesomeIcon  key={social_media.id} icon={social_media.icon} />
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