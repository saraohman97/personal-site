// import flexiclean from '../assets/flexiclean.png'
// import carelyo from '../assets/carelyo.png'
// import { HiArrowLongRight } from "react-icons/hi2"
import Carousel, { CarouselItem } from '../components/Carousel'

const Portfolio = () => {
  return (
    <div id='portfölj'>
      <h1>Portfölj</h1>
      <p>Mest nyligen arbeten</p>

      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
        <CarouselItem>Item 4</CarouselItem>
      </Carousel>

      {/* <div className="portfolio-carousel swiper-container">
        <div className="swiper-wrapper">

          <div className="portfolio-item swiper-slide">
            <img src={flexiclean} alt="" width='400px' />

            <div className='portfolio-text'>
              <h4>FlexiClean</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo unde voluptatem eveniet, sapiente quae ipsum nulla autem temporibus illo placeat ab incidunt sequi earum pariatur consequuntur eos maxime adipisci?</p>
              <button>Demo <HiArrowLongRight /> </button>
            </div>
          </div>

          <div className="portfolio-item swiper-slide">
            <img src={carelyo} alt="" width='400px' />

            <div className='portfolio-text'>
              <h4>Carelyo</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo unde voluptatem eveniet, sapiente quae ipsum nulla autem temporibus illo placeat ab incidunt sequi earum pariatur consequuntur eos maxime adipisci?</p>
              <button>Demo <HiArrowLongRight /> </button>
            </div>
          </div>

        </div>
      </div> */}


    </div>
  )
}

export default Portfolio