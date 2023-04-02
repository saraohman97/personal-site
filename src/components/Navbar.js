import { BsGlobe2 } from "react-icons/bs";
import { HiMusicNote } from "react-icons/hi";
import LanguageModal from './modals/LanguageModal';
import MusicModal from './modals/MusicModal';
import { NavHashLink as NavLink } from 'react-router-hash-link'

const Navbar = ({setEnglish, english}) => {
    
    return (
        <div className='navbar'>
            <NavLink to='#om-mig'>{english === true ? 'About me' : 'Om mig'}</NavLink>
            <NavLink to='#kunskaper'>{english === true ? 'Skills' : 'Kunskaper'}</NavLink>
            <NavLink to='#portfölj' >{english === true ? 'Project portfolio' : 'Projekt portfölj'}</NavLink>
            <NavLink to='#kontakta-mig'>{english === true ? 'Contact me' : 'Kontakta mig'}</NavLink>
            <div className='nav-icons'>
                <div className='nav-icon dropdown-globe'><BsGlobe2 /><LanguageModal english={english} setEnglish={setEnglish} /></div>
                <div className='nav-icon dropdown-music'><HiMusicNote /><MusicModal /></div>
            </div>
        </div>
    )
}

export default Navbar