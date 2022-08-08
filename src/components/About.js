import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCuttlefish } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import aboutpic from '../images/about4.png'


export const About = () => {
  return (
    <div className='container-fluid'>
      {/* first row */}
      <div className='row aboutfirst'>
        {/* first row first column */}
        <div className='col firstone'>
          <img src={aboutpic} alt='photu'></img>
        </div>
        {/* first row second column */}
        <div className='col firsttwo'>
          <h4>Hello Everyone, I am Vatsal Kamlesh Patel from Mumbai, India.<br /><br/>
            I have pursued Bachelor of Engineering in Information technology from Rajiv Gandhi Institue of Texhnology, Mumbai.<br />
            <br/>To know more about me, follow me on various social media platfroms given below.</h4>
        </div>
      </div>
      {/* second row */}
      <div className='row aboutsecond'>
        <h1 className='text-center'>SKILL SET</h1>
        {/* second row column */}
        <div className='col secondcol text-center'>
          <a href="https://www.w3schools.com/html/" target="blank"><FontAwesomeIcon icon={faHtml5} /></a>
          <a href="https://www.w3schools.com/css/" target="blank"><FontAwesomeIcon icon={faCss3} /></a>
          <a href="https://www.w3schools.com/c/" target="blank"><FontAwesomeIcon icon={faCuttlefish} /></a>
          <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" target="blank"><FontAwesomeIcon icon={faBootstrap} /></a>
          <a href="https://www.javascript.com/learn/strings" target="blank"><FontAwesomeIcon icon={faJsSquare} /></a>
          <a href="https://reactjs.org/" target="blank"><FontAwesomeIcon icon={faReact} /></a>
          <a href="https://www.w3schools.com/python/" target="blank"><FontAwesomeIcon icon={faPython} /></a>
        </div>
      </div>

    </div>
  )
}
