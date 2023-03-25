import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrFacebookOption } from "react-icons/gr"
import { GrGithub } from "react-icons/gr"

const SocialIcons = () => {
    return (
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/sara-%C3%B6hman-0b7aa2116/" className='social-icon'><FaLinkedinIn /></a>
            <a href="https://github.com/saraohman97" className='social-icon'><GrGithub /></a>
            <a href="https://www.facebook.com/sara.ohman.3/" className='social-icon'><GrFacebookOption /></a>
        </div>
    )
}

export default SocialIcons