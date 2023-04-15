import React from 'react'
import { HiArrowLongDown } from "react-icons/hi2"
import self from '../assets/self-2.png'
import { BsFillMouse2Fill } from "react-icons/bs"
import { NavHashLink as Link } from 'react-router-hash-link'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrFacebookOption } from "react-icons/gr"
import { GrGithub } from "react-icons/gr"

const Home = ({ english }) => {
  return (
    <div className='home'>
      <div className='social-icons'>
        <a href="https://www.linkedin.com/in/sara-%C3%B6hman-0b7aa2116/" className='social-icon'><FaLinkedinIn /></a>
        <a href="https://github.com/saraohman97" className='social-icon'><GrGithub /></a>
        <a href="https://www.facebook.com/sara.ohman.3/" className='social-icon'><GrFacebookOption /></a>
      </div>

      <div className="home-img">
        <div className='mask'>
          <img src={self} alt="" />
        </div>
      </div>

      <div className="home-text">
        <h1>{english === true ? 'Hi, I am Sara.' : 'Hej, jag är Sara.'} <br /> {english === true ? 'Frontend developer.' : 'Frontendutvecklare.'}</h1>

        <p>{english === true ? 'I graduate in June and am already looking for a pleasant and ambitious workplace. I did my LIA (Learning At work) at the company Swedcon18 and mainly worked on a digital healthcare platform.' : 'Jag tar examen i juni och letar trevlig och ambitiös arbetsplats redan nu. Jag praktiserade på företaget Swedcon18 och arbetade huvudsakligen på en digital vårdplattform.'}</p>
        <div className='link'>
          <Link to='#portfölj'><button>{english === true ? 'Check out projects' : 'Kolla in projekt'}</button></Link>
        </div>

        <Link to='#om-mig' className="scroll-text">
          <BsFillMouse2Fill color='#7BA3ED' size='25px' />
          <small>{english === true ? 'Scroll down' : 'Skrolla neråt'}</small>
          <HiArrowLongDown color='#7BA3ED' size='25px' />
        </Link>
      </div>
    </div>
  )
}

export default Home