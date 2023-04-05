import { BsGlobe2 } from "react-icons/bs";
import { HiMusicNote } from "react-icons/hi";
import LanguageModal from './modals/LanguageModal';
import MusicModal from './modals/MusicModal';
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { AiOutlineUser } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { useState } from "react";


const Navbar = ({ setEnglish, english }) => {
    const [closeNav, setCloseNav] = useState(false)

    const toggleNav = () => {
        closeNav
            ? setCloseNav(false)
            : setCloseNav(true)
    }

    return (
        <div className='navbar'>
                <div className="nav-links">
                    <NavLink to='#om-mig'><AiOutlineUser />{english === true ? 'About me' : 'Om mig'}</NavLink>
                    <NavLink to='#kunskaper'><FaReact />{english === true ? 'Skills' : 'Kunskaper'}</NavLink>
                    <NavLink to='#portfölj' ><AiOutlinePicture />{english === true ? 'Project portfolio' : 'Projekt portfölj'}</NavLink>
                    <NavLink to='#kontakta-mig'><TiContacts />{english === true ? 'Contact me' : 'Kontakta mig'}</NavLink>
                </div>
            <div className='nav-icons'>
                <div className='nav-icon dropdown-globe'><BsGlobe2 /><LanguageModal english={english} setEnglish={setEnglish} /></div>
                <div className='nav-icon dropdown-music'><HiMusicNote /><MusicModal /></div>
            </div>
            <div className="navbar-mobile">
                <p>SARA</p>
                <div onClick={toggleNav} className="btn-close-nav">{closeNav === false ? 'X' : '+'}</div>
            </div>
        </div>
    )
}

export default Navbar