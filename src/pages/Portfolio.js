import React from 'react'
import SocialIcons from '../components/SocialIcons'
import flexiclean from '../assets/flexiclean.png'
import carelyo from '../assets/carelyo.png'

const Portfolio = () => {
  return (
    <div className='portfolio-wrapper'>
      <SocialIcons />

      <div className='portfolio'>
        <div className="portfolio-text">
          <h1>Hej. Jag är Sara. <br />En Frontend utvecklare.</h1>
          <div className='portfolio-mini-text'>
            <p>Det här är mina projekt hittills.</p>
          </div>
        </div>

        <div className="portfolio-list">
          <div className='portfolio-item'>
            <img src={flexiclean} alt="" />
            <div className="portfolio-overlay">
              <h1>FlexiClean</h1>
              <p>Orenat dagvatten kan orsaka stora miljöproblem och skada våra vattenresurser. FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten.</p>
              <a href="http://" className='btn-visit'>Besök sajten</a>
            </div>
          </div>
          <div className='portfolio-item'>
            <img src={carelyo} alt="" />
            <div className="portfolio-overlay">
              <h1>Carelyo</h1>
              <p>Företaget Swedcon18 verksammas med mjukvaruutveckling och IT-konsultation. Under 2022/2023 byggdes Carelyo applikationen. Carelyo är ett vårdföretag som erbjuder vård inom psykologi och medicin digitalt via mobilapplikationer.</p>
              <a href="http://" className='btn-visit'>Besök sajten</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio