import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faHtml5, faCss3, faBootstrap, faReact, faCuttlefish, faPython } from '@fortawesome/free-brands-svg-icons';
import aboutpic from '../images/about4.png';

const About = () => {
  return (
    <div className='container-fluid'>
      {/* first row */}
      <div className='row aboutfirst'>
        {/* first row first column */}
        <div className='col-md-6 firstone'>
          <img src={aboutpic} alt='photu'></img>
        </div>
        {/* first row second column */}
        <div className='col-md-6 firsttwo'>
          <h4>Hello Everyone, I am Vatsal Kamlesh Patel from Mumbai, India.<br /><br />
            I have pursued Bachelor of Engineering in Information technology from Rajiv Gandhi Institue of Texhnology, Mumbai.<br />
            <br />To know more about me, follow me on various social media platforms given below.</h4>
        </div>
      </div>
      {/* second row */}
      <div className='row aboutsecond'>
        <h1 className='text-center'>SKILL SET</h1>
        {/* second row column */}
        <div className='col-md-12 secondcol text-center'>
          <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHtml5} /></a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCss3} /></a>
          <a href="https://www.w3schools.com/c/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faCuttlefish} /></a>
          <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faBootstrap} /></a>
          <a href="https://www.javascript.com/learn/strings" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faJsSquare} /></a>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faReact} /></a>
          <a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPython} /></a>
        </div>
      </div>
    </div>
  );
}

export default About;
