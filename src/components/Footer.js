import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../components/Footer.css';

const Footer = () => {
  return (
    <div className='container-fluid row footer text-center'>
      <div className='footericons'>
        <a href="https://www.instagram.com/__vatsalpatel__/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.facebook.com/vatsal.patel.1042" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.linkedin.com/in/vatsal-kamlesh-patel-615801190/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/VatsalPatel19" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </div>
  );
}

export default Footer;
