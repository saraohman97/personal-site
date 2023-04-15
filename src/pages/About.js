import { Link } from 'react-router-dom'
import self from '../assets/self-2.png'

const About = ({ english }) => {
  return (
    <div className='about section' id='om-mig'>
      <h1>{english === true ? 'About me' : 'Om mig'}</h1>
      <p className='section-subtitle'>{english === true ? 'My introduction' : 'Min introduktion'}</p>

      <div className="grid">
        <div className="about-img">
          <div className='mask'>
            <img src={self} alt="" />
          </div>
        </div>

        <div className="about-text">
          <p className='about-desc'>{english === true ? 'I mostly work in react web pages with JQuery, useMutations and other hooks. In the near future I would like to switch to Nextjs or vite. With basic knowledge of CRUD methods, I have created web api with MSSQL, MySQL and NoSql.' : 'Jag arbetar oftast i react webbsidor med JQuery, useMutations och andra hooks. I snaraste framtiden skulle jag vilja byta till Nextjs eller vite. Med grundläggande kunskaper i CRUD-metoder så har jag skapat web api med MSSQL, MySQL och NoSql.'}</p>

          <div className="number-display">
            <div className="number-display-item">
              <h1 className='blue'>1+</h1>
              {english === true
                ? <p>Years <br /> programming <br /> experience</p>
                : <p>År <br />programmerings <br /> vana</p>
              }
            </div>

            <div className="number-display-item">
              <h1 className='blue'>5+</h1>
              {english === true
                ? <p>Completed <br /> projects</p>
                : <p>Färdiga <br /> projekt</p>
              }
            </div>

            <div className="number-display-item">
              <h1 className='blue'>0</h1>
              {english === true
                ? <p>Previous <br /> workplaces</p>
                : <p>Tidigare <br /> arbetsplatser</p>
              }
            </div>
          </div>

          <div className='link'>
            <Link to='/Frontend-utvecklare-cv.pdf' target="_blank" download><button>{english === true ? 'Download CV' : 'Ladda ner CV'}</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About