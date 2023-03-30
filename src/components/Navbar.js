import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsGlobe2 } from "react-icons/bs";
import { HiMusicNote } from "react-icons/hi";
import LanguageModal from './modals/LanguageModal';
import MusicModal from './modals/MusicModal';

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/' style={({ isActive }) => ({ color: isActive ? '#7BA3ED' : 'black' })}>Hem</NavLink>
            <NavLink to='/portfolie' style={({ isActive }) => ({ color: isActive ? '#7BA3ED' : 'black' })}>Projekt portfolie</NavLink>
            <NavLink to='/kontakta-mig' style={({ isActive }) => ({ color: isActive ? '#7BA3ED' : 'black' })}>Kontakta mig</NavLink>
            <NavLink to='/blogg' style={({ isActive }) => ({ color: isActive ? '#7BA3ED' : 'black' })}>Blogg</NavLink>
            <div className='nav-icons'>
                <div className='nav-icon dropdown-globe'><BsGlobe2 /><LanguageModal /></div>
                <div className='nav-icon dropdown-music'><HiMusicNote /><MusicModal /></div>
            </div>
        </div>
    )
}

export default Navbar