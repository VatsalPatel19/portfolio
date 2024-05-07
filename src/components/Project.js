import React from 'react';
import './Project.css';
import gujarat from '../images/gujarat.png';
import cardtwo from '../images/stego.jpg';
import cardone from '../images/port.png';

const Project = () => {
  return (
    <div className='container-fluid'>
      {/* first row */}
      <div className='row projectrow'>
        <h1 className='text-center'>MY PROJECTS</h1>

        {/* first card */}
        <div className="card">
          <img src={cardone} alt="Avatar" />
          <div className="container">
            <p className='text-center'>Personal Portfolio</p>
            <p>This website is developed using ReactJs.</p>
            <p className='text-center'><a href='/'><button type="button">View Project</button></a></p>
          </div>
        </div>

        {/* second card */}
        <div className="card">
          <img src={cardtwo} alt="Avatar" />
          <div className="container">
            <p className='text-center'>Secure Stego</p>
            <p>Secure Image Steganographic software in which encryption is done using Blowfish Algorithm and Transmission of Image is done using Apache Kafka.</p>
            <p className='text-center'><a href='https://ieeexplore.ieee.org/document/9716292' target="_blank" rel="noopener noreferrer"><button type="button">View Project</button></a></p>
          </div>
        </div>

        {/* third card */}
        <div className="card">
          <img src={gujarat} alt="Avatar" />
          <div className="container">
            <p className='text-center'>Gujarat Tourism Website</p>
            <p>Developed using HTML, CSS, PHP in my 2nd year of B.E.</p>
            <p className='text-center'><a href='https://gujarattourism65.000webhostapp.com/index.html' target="_blank" rel="noopener noreferrer"><button type="button">View Project</button></a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
