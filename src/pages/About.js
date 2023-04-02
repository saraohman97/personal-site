import { Link } from 'react-router-dom'
import self from '../assets/self-2.png'

const About = ({english}) => {
  return (
    <div className='about' id='om-mig'>
      <h1>{english === true ? 'About me' : 'Om mig'}</h1>
      <p>{english === true ? 'My introduction' : 'Min introduktion'}</p>

      <div className="df">
        <div className="home-img">
          <div className='mask'>
            <img src={self} alt="" width={500} />
          </div>
        </div>

        <div className="about-text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam amet quaerat voluptatem porro aut, minus laudantium fugiat ipsam nobis quo magni eius libero ullam praesentium voluptatum nisi consequuntur eaque rem!</p>

          <div className="number-display">
            <div className="number-display-item">
              <h1 className='blue'>1+</h1>
              <p>{english === true ? 'Years programming experience' : 'År programmerings vana'}</p>
            </div>

            <div className="number-display-item">
              <h1 className='blue'>5+</h1>
              <p>{english === true ? 'Completed projects' : 'Färdiga project'}</p>
            </div>

            <div className="number-display-item">
              <h1 className='blue'>0</h1>
              <p>{english === true ? 'Previous workplaces' : 'Tidigare arbetsplatser'}</p>
            </div>
          </div>

          <Link to='/Frontend-utvecklare-cv.pdf' target="_blank" download><button>{english === true ? 'Download CV' : 'Ladda ner CV'}</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About