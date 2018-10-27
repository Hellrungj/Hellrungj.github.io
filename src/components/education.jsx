import React, { Component } from 'react';

class Education extends Component {
    state = {  }
    render() { 
        return (
        <section id="education" className="education">
        <div className="content-wrap">
          <h2 className="display-topic">Education:</h2>
          <hr/>
          <div className="col-narrow">
            <h3>Bachelor of Arts in Computer and Information Science</h3>
            <p>Berea College - Berea, KY</p>
          </div>
          <div className="col-wide education-description">
            <p>Dec. 2017</p>
          </div>
        </div>
        </section>  
      );
    }
}
 
export default Education;