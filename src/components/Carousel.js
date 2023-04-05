import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import '../Css/Carousel.css'

import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

/* --------------carousel item holder------------- */
export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    )
}

/* --------------carousel holder------------- */
const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    /* --------------auto circle with hover pause------------- */
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 300000)

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    })

    /* --------------swipeable carousel on mobile devices------------- */
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    })

    return (
        <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" })
                })}
            </div>

            <div className="indicators">
                {/* --------------prev button------------- */}
                <button
                    className='btn-prev'
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    <BsChevronLeft size='2.5rem' />
                </button>

                {/* --------------page labels------------- */}
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${index === activeIndex ? "active" : ""} btn-dots`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                            {/* {index + 1} */}
                        </button>
                    )
                })}

                {/* --------------next button------------- */}
                <button
                    className='btn-next'
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    <BsChevronRight size='2.5rem' />
                </button>
            </div>
        </div>
    )
}

export default Carousel;