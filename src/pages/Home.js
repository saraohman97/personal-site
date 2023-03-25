import React from 'react'
import SocialIcons from '../components/SocialIcons'
import { HiArrowLongRight } from "react-icons/hi2"
import self from '../assets/self.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <SocialIcons />

      <div className="home-text">
        <h1>Hej. Jag är Sara. <br />En Frontend utvecklare.</h1>
        <Link to='/portfolie'><button className='btn'>Kolla in projekt</button></Link>
        <div className='home-mini-text'>
          <Link to='/blogg'><p>Jag har en blogg också, <br />för varför inte?</p></Link>
          <Link to='/blogg' className='home-arrow'><HiArrowLongRight /></Link>
        </div>
      </div>

      <div className="home-img">
        <div className='mask'>
          <img src={self} alt="" width={400} />
        </div>
      </div>
    </div>
  )
}

export default Home