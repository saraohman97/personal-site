import React from 'react'
import { BsGlobe2 } from "react-icons/bs";
import { HiMusicNote } from "react-icons/hi";
import LanguageModal from './modals/LanguageModal';
import MusicModal from './modals/MusicModal';
import { NavHashLink as NavLink } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='#om-mig'>Om mig</NavLink>
            <NavLink to='#portfölj' >Projekt portfölj</NavLink>
            <NavLink to='#kunskaper'>Kunskaper</NavLink>
            <NavLink to='#kontakta-mig'>Kontakta mig</NavLink>
            <div className='nav-icons'>
                <div className='nav-icon dropdown-globe'><BsGlobe2 /><LanguageModal /></div>
                <div className='nav-icon dropdown-music'><HiMusicNote /><MusicModal /></div>
            </div>
        </div>
    )
}

export default Navbar