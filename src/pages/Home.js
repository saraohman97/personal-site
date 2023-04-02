import React from 'react'
import SocialIcons from '../components/SocialIcons'
import { HiArrowLongDown } from "react-icons/hi2"
import self from '../assets/self-2.png'
import { BsFillMouse2Fill } from "react-icons/bs"
import { NavHashLink as Link } from 'react-router-hash-link'

const Home = ({english}) => {
  return (
    <div className='home'>
      <SocialIcons />

      <div className="home-text">
        <h1>{english === true ? 'Hi. I am Sara.' : 'Hej. Jag är Sara.'} <br /> {english === true ? 'A Frontend developer.' : 'En Frontendutvecklare.'}</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti, omnis fugit dolor dolores, dolorem laboriosam ex odio iste est.</p>
        <Link to='#portfölj'><button>{english === true ? 'Check out projects' : 'Kolla in projekt'}</button></Link>

        <Link to='#om-mig' className="scroll-text">
          <BsFillMouse2Fill color='#7BA3ED' size='25px' />
          <small>{english === true ? 'Scroll down' : 'Skrolla neråt'}</small>
          <HiArrowLongDown color='#7BA3ED' size='25px' />
        </Link>
      </div>

      <div className="home-img">
        <div className='mask'>
          <img src={self} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home