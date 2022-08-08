import React from 'react'
import '../components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export const Footer = () => {

  return (
    <>
      {/* row */}
      <div className='container-fluid row footer text-center'>
        <div className='footericons'>
          <a href="https://www.instagram.com/__vatsalpatel__/" target="blank"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.facebook.com/vatsal.patel.1042" target="blank"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.linkedin.com/in/vatsal-kamlesh-patel-615801190/" target="blank"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/VatsalPatel19" target="blank"><FontAwesomeIcon icon={faGithub} /></a></div>
      </div>
    </>
  )
}
