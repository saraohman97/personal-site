import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrFacebookOption } from "react-icons/gr"
import { GrGithub } from "react-icons/gr"

const SocialIcons = () => {
    return (
        <div className='social-icons'>
            <div className='social-icon'><FaLinkedinIn /></div>
            <div className='social-icon'><GrFacebookOption /></div>
            <div className='social-icon'><GrGithub /></div>
        </div>
    )
}

export default SocialIcons