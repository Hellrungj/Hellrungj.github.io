import React, { Component } from 'react';
import Profile from "./../images/profile.png";
import Resume from "./../resume/Resume-John-Hellrung.pdf"


class About extends Component {
    state = { 
        source: "https://github.com/Hellrungj/Hellrungj.github.io"
     }

    render() { 
        return ( 
            <header>
                <section id="#about" className="about">  
                    <a href={Resume} download className="btn btn-primary download">Download PDF</a>
                    <div className="content-wrap">
                        <img className="profile-img col-narrow" src={Profile} alt="John Hellrung"></img>
                        <div className="col-wide">
                            <h1 className="display-topic">John J. Hellrung</h1>
                            <h2 className="display-topic">Aspiring Software Developer</h2>
                            <hr/>
                            <p>As an aspiring software developer, I focus on web design but I am also interesting in IoT devlopment, mobile appications, desktops appications and AI development. Self-motivated, solutions-oriented developer with experience in developing software solutions and web applications.</p>
                            <p>"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear." – Nelson Mandela</p>
                            <div style={{textAlign: "center"}}>
                                <a role="button" aria-pressed="true" className="btn btn-secondary btn-sm" href={this.state.source} target="_blank" rel="noopener noreferrer">
                                    View Source of This Project
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </header>   
        );
    }
}
 
export default About;