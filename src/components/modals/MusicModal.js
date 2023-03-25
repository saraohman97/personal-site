import React from 'react'
import musiccover from '../../assets/musiccover.jpg'
import { MdFastForward } from "react-icons/md";
import { MdFastRewind } from "react-icons/md";
import { MdOutlinePause } from "react-icons/md";

import { IoVolumeLow } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";

const MusicModal = () => {
    return (
        <div className='music-modal'>
            <div className="music-record">
                <img src={musiccover} alt="" />
                <div className="music-record-text">
                    <strong>I Wanna Be Yours</strong> <br />
                    <small>Artic Monkeys</small>
                </div>
            </div>

            <div className="music-player">
                <div className="music-player-play">
                    <div className='hi'><MdFastRewind /></div>
                    <div className='hi'><MdOutlinePause /></div>
                    <div className='hi'><MdFastForward /></div>
                </div>


                <div className="music-player-volume">
                    <div className='hi'><IoVolumeLow /></div>
                    <div className="volume-line hi"></div>
                    <div className='hi'><IoVolumeHigh /></div>
                </div>
            </div>
        </div>
    )
}

export default MusicModal