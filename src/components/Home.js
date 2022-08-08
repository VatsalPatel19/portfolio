import React from 'react'
import './Home.css'
import vatsal from '../images/vatsal.jpg'
import introduce from '../images/intro2.png'
export const Home = () => {
  return (
    <>
      <div className='container-fluid'>
        {/* first row */}
        <div className='row homefirst'>
          {/* first row first column   */}
          <div className='col oneone'>
            <h1 className='hello'>Hello!, My name is Vatsal Patel</h1>
            <h2 className='welcome'>Welcome to My Portfolio!</h2>
          </div>
          {/* first row second column   */}
          <div className='col onetwo'>
            <img className='vatsal-img' src={vatsal} alt='Vatsal'></img>
          </div>
        </div>
        {/* second row */}
        <div className='row homesecond'>
          <h2 className='text-center'>INTRODUCTION</h2>
          <div className='col twoone'>
            <img src={introduce} alt='photu'></img>
          </div>
          <div className='col twotwo'>
            <h4>I am An I.T Undergraduate pursued B.E in Information Technology and interested in Web designing and Front-end development.
              <br /><br/>Skills: HTML, CSS, JS,  Python BASIC, React.js,  C Programming, Data Structures , DBMS.<br />
              Focused, Keen Learner, Competitive, and Cooperative.
            </h4>
          </div>
        </div>
      </div>
    </>

  )
}

