import React from 'react'
import england from '../../assets/england.png'
import sweden from '../../assets/sweden.png'

const LanguageModal = () => {
  return (
    <div className='language-modal'>
        <div className='language-option he'>
            <img src={england} alt="" />
            <p>English</p>
        </div>
        <div className="line"></div>
        <div className='language-option hs'>
            <img src={sweden} alt="" />
            <p>Svenska</p>
        </div>
    </div>
  )
}

export default LanguageModal