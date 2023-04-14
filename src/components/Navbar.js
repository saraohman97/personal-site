import { useState } from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link'

import { AiOutlineUser } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import sweden from '../assets/sweden.png'
import england from '../assets/england.png'
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";


const Navbar = ({ setEnglish, english, toggleTheme }) => {
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
                    <div>
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

                    <div className='checkbox'>
                        <input type="checkbox" onClick={toggleTheme} />
                        <div className="sun">
                            <BsSun size='1.5rem' />
                        </div>
                        <div className="moon">
                            <BsMoon size='1.5rem' />
                        </div>
                    </div>

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
                    <div className="menu-icons">
                        <div>
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

                        <div className='checkbox'>
                            <input type="checkbox" onClick={toggleTheme} />
                            <div className="sun">
                                <BsSun size='1.5rem' />
                            </div>
                            <div className="moon">
                                <BsMoon size='1.5rem' />
                            </div>
                        </div>
                    </div>


                    <div onClick={toggleNav} className='btn-show'>{closeNav === true ? 'X' : <div className="hover-blue"><BsGrid /></div>}</div>
                </div>
            </div>
        </>
    )
}

export default Navbar