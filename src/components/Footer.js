import { useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa'
import { GrFacebookOption } from "react-icons/gr"
import { GrGithub } from "react-icons/gr"

const Footer = () => {
    const [isCopied, setIsCopied] = useState(false);
 
    const handleClick = () => {
      navigator.clipboard.writeText('070 345 43 21');
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    };

    return (
        <div className='footer' id='kontakta-mig'>
            <div className="left">
                <h1 className='blue'>Sara Öhman</h1>
                <h2>Frontendutvecklare</h2>
            </div>
            <div className='center'>

                <h3>Kontakta mig</h3>
                <p>Intresserad av att anställa mig? Vill du bolla idéer? Hör av dig! Jag älskar att skaffa nya kontakter. </p>
                <div className='contact-info'>
                    <div>
                        <h4 className='blue'>Mobil</h4>
                        <p className='btn-copy' onClick={handleClick}>070 345 43 21 <span className='hover-btn-msg'>{isCopied ? 'Kopierad!' : 'Kopiera text'}</span></p>
                    </div>
                    <div>
                        <h4 className='blue'>Email</h4>
                        <p className='btn-copy' onClick={handleClick}>mail@mail.com<span className='hover-btn-msg'>{isCopied ? 'Kopierad!' : 'Kopiera text'}</span></p>
                    </div>
                </div>
            </div>
            <div className="right">
                <a href="https://www.linkedin.com/in/sara-%C3%B6hman-0b7aa2116/" ><FaLinkedinIn size='1.5rem' /></a>
                <a href="https://github.com/saraohman97"><GrGithub size='1.5rem' /></a>
                <a href="https://www.facebook.com/sara.ohman.3/"><GrFacebookOption size='1.5rem' /></a>
            </div>
        </div>
    )
}

export default Footer