import { Link } from 'react-router-dom'
import self from '../assets/self.png'

const About = () => {
  return (
    <div className='about' id='om-mig'>
      <h1>Om mig</h1>
      <p>Min introduktion</p>

      <div className="df">
        <div className="home-img">
          <div className='mask'>
            <img src={self} alt="" width={400} />
          </div>
        </div>

        <div className="about-text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam amet quaerat voluptatem porro aut, minus laudantium fugiat ipsam nobis quo magni eius libero ullam praesentium voluptatum nisi consequuntur eaque rem!</p>

          <div className="number-display">
            <div className="number-display-item">
              <h1 className='blue'>1+</h1>
              <p>År programmerings vanna</p>
            </div>

            <div className="number-display-item">
              <h1 className='blue'>5+</h1>
              <p>Färdiga projekt</p>
            </div>

            <div className="number-display-item">
              <h1 className='blue'>0</h1>
              <p>Tidigare arbetsplatser</p>
            </div>
          </div>

          <Link to='/Frontend-utvecklare-cv.pdf' target="_blank" download><button>Ladda ner CV</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About