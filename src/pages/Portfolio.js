import flexiclean from '../assets/flexiclean.png'
import carelyo from '../assets/carelyo.png'
import { HiArrowLongRight } from "react-icons/hi2"
import Carousel, { CarouselItem } from '../components/Carousel'

const Portfolio = ({ english }) => {
  return (
    <div id='portfölj'>
      <h1>{english === true ? 'Portfolio' : 'Portfölj'}</h1>
      <p>{english === true ? 'Most recent work' : 'Mest nyligen arbeten'}</p>

      <Carousel>
        <CarouselItem>
          <img src={flexiclean} alt="" />

          <div className='portfolio-text'>
            <h3>FlexiClean</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo unde voluptatem eveniet, sapiente quae ipsum nulla autem temporibus illo placeat ab incidunt sequi earum pariatur consequuntur eos maxime adipisci?</p>
            <button>Demo <HiArrowLongRight /> </button>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={carelyo} alt="" />

          <div className='portfolio-text'>
            <h3>Carelyo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo unde voluptatem eveniet, sapiente quae ipsum nulla autem temporibus illo placeat ab incidunt sequi earum pariatur consequuntur eos maxime adipisci?</p>
            <button>Demo <HiArrowLongRight /></button>
          </div>
        </CarouselItem>
      </Carousel>

    </div>
  )
}

export default Portfolio