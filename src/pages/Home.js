import React from 'react'
import SocialIcons from '../components/SocialIcons'
import { HiArrowLongDown } from "react-icons/hi2"
import self from '../assets/self.png'
import { BsFillMouse2Fill } from "react-icons/bs"
import { NavHashLink as Link } from 'react-router-hash-link'

const Home = () => {
  return (
    <div className='home'>
      <SocialIcons />

      <div className="home-text">
        <h1>Hej. Jag är Sara. <br />En Frontend utvecklare.</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti, omnis fugit dolor dolores, dolorem laboriosam ex odio iste est.</p>
        <Link to='#portfölj'><button>Kolla in projekt</button></Link>

        <div className="scroll-text">
          <BsFillMouse2Fill color='#7BA3ED' size='25px' />
          <small>Scrolla neråt</small>
          <HiArrowLongDown color='#7BA3ED' size='25px' />
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