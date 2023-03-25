import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsGlobe2 } from "react-icons/bs";
import { HiMusicNote } from "react-icons/hi";

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/'>Hem</NavLink>
            <NavLink to='/portfolie'>Projekt portfolie</NavLink>
            <NavLink to='/kontakta-mig'>Kontakta mig</NavLink>
            <NavLink to='/blogg'>Blogg</NavLink>
            <div className='nav-icons'>
                <div className='nav-icon'><BsGlobe2 /></div>
                <div className='nav-icon'><HiMusicNote /></div>
            </div>
        </div>
    )
}

export default Navbar