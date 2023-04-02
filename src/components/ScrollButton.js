import React, { useState } from 'react';
import { BsArrowUpSquareFill } from "react-icons/bs";

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
            <BsArrowUpSquareFill onClick={scrollToTop}
                className='btn-scroll'
                style={{ display: visible ? 'inline' : 'none' }}
                size='3rem'
            />
    );
}

export default ScrollButton;
