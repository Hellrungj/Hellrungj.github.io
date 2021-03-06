import React, { Component } from "react";
import Profile from "./../assets/images/profile.jpg";
//const Resume = import("./../assets/resume/Resume-John-Hellrung.pdf");

// TODO: Make an Typescript Interface

class About extends Component<any> {
  state = {
    source: this.props.about.source,
    profile: {
      src: Profile,
      alt: this.props.about.profile.alt
    },
    resume: process.env.PUBLIC_URL + './../assets/resume/Resume-John-Hellrung.pdf',
    name: this.props.about.name,
    title: this.props.about.title,
    headline: this.props.about.headline,
    quote: {
      text: this.props.about.quote.text,
      isActive: this.props.about.quote.isActive
    }
  };

  render() {
    const isActive = this.state.quote.isActive;
    let quote;

    if (isActive) {
      quote = <p>{this.state.quote.text}</p>;
    }

    return (
        <section id="#about" className="about">
          <div className="content-wrap">
            <a
              href={this.state.resume}
              download
              className="download"
            >
              Download PDF
            </a>
            {/*<img
              className="profile-img col-narrow"
              src={this.state.profile.src}
              alt={this.state.profile.alt}
            /> */}
            {/*<div className="col-wide">*/}
            <h1 className="display-topic">{this.state.name}</h1>
            <h2 className="display-topic">{this.state.title}</h2>
            <hr />
            <p>{this.state.headline}</p>
            {/*quote*/}
            <div style={{ textAlign: "center" }}>
              <a
                role="button"
                aria-pressed="true"
                className="btn btn-secondary btn-sm"
                href={this.state.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source of This Project
              </a>
            </div>
            {/*</div>*/}
          </div>
        </section>
    );
  }
}

export default About;
