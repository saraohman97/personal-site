import flexiclean from '../assets/flexiclean.png'
import carelyo from '../assets/carelyo.png'
// import { HiArrowLongRight } from "react-icons/hi2"

const Portfolio = ({ english }) => {
  return (
    <div id='portfölj' className='section'>
      <h1>{english === true ? 'Portfolio' : 'Portfölj'}</h1>
      <p className='section-subtitle'>{english === true ? 'Most recent work' : 'Mest nyligen arbeten'}</p>

      <div className="portfolio-wrapper">
        <div className="portfolio-card">
          <img src={flexiclean} alt="" />

          <div className="portfolio-text">
            <div className="knowledge-info">
              <div className="knowledge-patch">CSS</div>
              <div className="knowledge-patch">React</div>
              <div className="knowledge-patch">Mantine</div>
            </div>
            <h3>FlexiClean</h3>
            <p>FlexiClean är en ﬁlterhållare för rening av process- och dag-vatten.
              Företaget behövde en uppdatering på sin hemsida med ytterligare funktionalitet. </p>
            {/* <span className='blue'>Applikationen är inte än launchad.</span>
            <a href="https://www.flexiclean.eu/"><button>Demo <HiArrowLongRight /></button></a> */}
          </div>
        </div>

        <div className="portfolio-card">
          <img src={carelyo} alt="" />

          <div className="portfolio-text">
            <div className="knowledge-info">
              <div className="knowledge-patch">CSS</div>
              <div className="knowledge-patch">React</div>
              <div className="knowledge-patch">Mantine</div>
            </div>
            <h3>Carelyo</h3>
            <p>Swedcon18 verksammas med mjukvaruutvecklingsaktiviteter och IT-konsultation. Swedcon18 håller just nu på att bygga en digital vårdplattform. Jag hjälpte med applikationen i 3 månader under LIA (praktik). </p>
            {/* <span className='blue'>Applikationen är inte än launchad.</span>
            <a href="https://www.carelyo.ng/"><button>Demo <HiArrowLongRight /></button></a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio