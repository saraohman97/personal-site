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
import sweden from '../assets/sweden.png'
import england from '../assets/england.png'


const Navbar = ({ setEnglish, english }) => {
    const [closeNav, setCloseNav] = useState(false)

    const toggleNav = () => {
        closeNav
            ? setCloseNav(false)
            : setCloseNav(true)
    }

    return (
        <>
            <div className='navbar'>
                <NavLink to='#om-mig'>{english === true ? 'About me' : 'Om mig'}</NavLink>
                <NavLink to='#kunskaper'>{english === true ? 'Skills' : 'Kunskaper'}</NavLink>
                <NavLink to='#portfölj' >{english === true ? 'Project portfolio' : 'Projekt portfölj'}</NavLink>
                <NavLink to='#kontakta-mig'>{english === true ? 'Contact me' : 'Kontakta mig'}</NavLink>
                <div className='nav-icons'>
                    {/* <div className='nav-icon dropdown-globe'><BsGlobe2 /><LanguageModal english={english} setEnglish={setEnglish} /></div> */}
                    <div className="nav-icon">
                        {english === true ? (
                            <div className='language-option' onClick={() => setEnglish(false)}>
                                <img src={sweden} alt="" />
                            </div>
                        ) : (
                            <div className='language-option' onClick={() => setEnglish(true)}>
                                <img src={england} alt="" />
                            </div>
                        )}
                    </div>

                    {/* <div className='nav-icon dropdown-music'><HiMusicNote /><MusicModal /></div> */}
                </div>
            </div>

            <div className="navbar-mobile">
                <div className={closeNav === true ? 'nav-links' : 'nav-links show-menu'}>
                    <NavLink to='#om-mig' onClick={toggleNav}><AiOutlineUser />{english === true ? 'About me' : 'Om mig'}</NavLink>
                    <NavLink to='#kunskaper' onClick={toggleNav}><FaReact />{english === true ? 'Skills' : 'Kunskaper'}</NavLink>
                    <NavLink to='#portfölj' onClick={toggleNav}><AiOutlinePicture />{english === true ? 'Project portfolio' : 'Projekt portfölj'}</NavLink>
                    <NavLink to='#kontakta-mig' onClick={toggleNav}><TiContacts />{english === true ? 'Contact me' : 'Kontakta mig'}</NavLink>
                </div>
                <div className="nav-menu">
                    {/* <p>SARA</p> */}
                    <div className="menu-icon">
                        {english === true ? (
                            <div className='language-option' onClick={() => setEnglish(false)}>
                                <img src={sweden} alt="" />
                            </div>
                        ) : (
                            <div className='language-option' onClick={() => setEnglish(true)}>
                                <img src={england} alt="" />
                            </div>
                        )}
                    </div>

                    <div onClick={toggleNav} className='btn-show'>{closeNav === true ? 'X' : '+'}</div>
                </div>
            </div>
        </>
    )
}

export default Navbar