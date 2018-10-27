import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/base/navBar'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import Education from './components/education'
import Footer from './components/base/footer'

import './App.css';

class App extends Component {
  state = {
    skills: { languages: [
          { id: 1, text: "Python"},
          { id: 2, text: "JavaScript"},
          { id: 3, text: "Ruby"},
          { id: 4, text: "C#"},
          { id: 5, text: "HTML"},
          { id: 6, text: "CSS"}, 
          { id: 7, text: "SQL"}],
        frameworks: [
          { id: 1, text: "Flask"},
          { id: 2, text: "Django"},
          { id: 3, text: "Node.js"},
          { id: 4, text: "React"},
          { id: 5, text: "Express"},
          { id: 6, text: "Ruby on Rails"}
        ],
        systems: [
          { id: 1, text: "Git"},
          { id: 2, text: "Google Cloud Platform"},
          { id: 3, text: "PowerShell"},
          { id: 4, text: "Bash"}]
        },

    experiences: [
      { id: 1,
        title: "Web Production and Support Specialist",
        location: "NetCrafters Interactive",
        date: "Mar - May 2018",
        points: [
          { id: 1, 
          text: "Deployed client’s websites with WordPress and various extensions"},
          { id: 2, 
            text: "Strategized with a team to design client’s ideal website expectations"},
          { id: 3, 
            text: "Ensured client’s needs and expectations were met through troubleshooting and unit testing"}]},
        { id: 2,
          title: "Accessibility Database Designer",
          location: "Disability and Accessibility Office, Berea College",
          date: "May - Aug 2016",
          demo: "https://github.com/Hellrungj/Alternate-Format-Text-Database",
          source: "https://github.com/Hellrungj/Alternate-Format-Text-Database",
          points: [
            { id: 1,
              text: "Documented project and tracked bugs with Git utilizing Github"},
            { id: 2,
              text: "Strategized and coordinated business processes with stakeholders to optimize workflow"},
            { id: 3,
              text: "Produced bi-weekly updates for a Flask SQL web system application focused on users with disabilities"}]},
        { id: 3,
          title: "Teaching Assistant",
          location: "Computer Science Program, Berea College",
          date: "2014 - 2017",
          points: [
            { id: 1,
              text: "Evaluated and assigned feedback for student assignments"},
            { id: 2,
              text: "Advised, tutored, and counseled students in introductory Python programming courses"}]},      
        { id: 4,
          title: "Tier 1 Technician",
          location: "Information Systems and Services, Berea College",
          date: "2013 - 2017",
          points: [
            { id: 1,
              text: "Coordinated and assisted with Tier 2 Technicians with an inventory ticketing system"},
            { id: 2,
              text: "Trained and advised newly hired Tier 1 Technicians on job responsibilities"},
            { id: 3,
              text: "Solved individual user’s computer and network issues"}]},
      ], 
    projects: [
      { id: 1,
        title: "Weekathon-App-Project",
        date: "2018",
        company: "Fathom",
        demo: "https://github.com/Nash-Hack-Week-Fathom-Team/Weekathon-App-Project",
        source: "https://github.com/Nash-Hack-Week-Fathom-Team/Weekathon-App-Project", 
        points: [
          { id: 1,
            text: "Developed a solution for an education application by building an React and Redux application"},
          { id: 2,
            text: "Implemented a back-end API using Node.js for handling future records"}]
      },
      { id: 2,
        title: "Rollout Registration API",
        date: "2017",
        company: "Technology Resource Center, Berea College",
        demo: "https://bitbucket.org/hellrungj/rest-api-project/",
        source: "https://bitbucket.org/hellrungj/rest-api-project/",  
        points: [
          { id: 1,
            text: "Conceptualized and engineered a solution by building an API for system for student enrollment"},
          { id: 2,
            text: "Developed an API using Flask and PowerShell for handled and entering data into a ticketing system"}]
      }
    ],
    social_media: [
      {id: 1, icon:"fa fa-envelope", text: "johnjameshellrung@gmail.com", link: "mailto:johnjameshellrung@gmail.com"},
      {id: 2, icon:"fa fa-linkedin", text: "LinkedIn", link: "https://www.linkedin.com/in/johnjameshellrung/"},
      {id: 3, icon:"fa fa-github", text: "github.com/Hellrungj", link: "https://github.com/Hellrungj"},
      {id: 4, icon:"fa fa-bitbucket", text: "bitbucket.org/hellrungj/", link: "https://bitbucket.org/hellrungj/"},
      {id: 5, icon:"fa fa-facebook", text: "Facebook", link: "https://www.facebook.com/john.hellrung.7"},
      {id: 6, icon:"fa fa-twitter", text: "Twitte", link: "https://twitter.com/johnhellrung"}
    ]
    }
  

  render() {
    return (
      <Router exact path={`/`} >
        <frameElement>
          <NavBar />
          <main className="container">
            <About />
            <Skills />
            <Experiences experiences={this.state.experiences}/>
            <Projects projects={this.state.projects}/>
            <Education />
            <Footer social_media={this.state.social_media}/>
          </main>
        </frameElement> 
      </Router>
    );
  }
}

export default App;