import React, { Component } from 'react';

class Experience extends Component {
    state = {
        title: this.props.title,
        location: this.props.location,
        date: this.props.date,
        points: this.props.points,
        demo: this.props.demo,
        source: this.props.source
    }
    render() { 
        return (
            <frameElement> 
                <div>
                    <div className="col-narrow">
                        <h3>{this.state.title}</h3>
                    </div>
                    <div className="col-wide job-description">
                        <p>{this.state.date}</p>
                    </div>
                </div>
                <i>{this.state.location}</i>
                <ul>
                    {this.state.points.map( points => (
                        <li key={points.id}>{points.text}</li>
                    ))}
                </ul>
                { this.state.demo && this.state.source &&
                <div style={{textAlign: "center"}}>
                    <a role="button" aria-pressed="true" className="btn btn-primary btn-sm" href={this.state.demo} target="_blank" rel="noopener noreferrer">
                        View Demo
                    </a>
                    <a role="button" aria-pressed="true" className="btn btn-secondary btn-sm" href={this.state.source} target="_blank" rel="noopener noreferrer">
                        View Source
                    </a>
                </div>
                }
            </frameElement>
         );
    }
}
 
export default Experience;