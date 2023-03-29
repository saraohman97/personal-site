import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrGithub } from "react-icons/gr"

const Home = () => {
  return (
    <div className='home'>
      <div className="home-text">
        <h1>Jag är en <span className='stor-text'>frontendutvecklare</span>. Mitt namn är Sara. </h1>

        <div className="d-flex">
          <a href="https://github.com/saraohman97" className="nav-git"><GrGithub /></a>
          <a href="https://www.linkedin.com/in/sara-%C3%B6hman-0b7aa2116/" className='nav-in'><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  )
}

export default Home