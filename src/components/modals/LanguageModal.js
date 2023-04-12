import React from 'react'
import england from '../../assets/england.png'
import sweden from '../../assets/sweden.png'

const LanguageModal = ({ setEnglish, english }) => {
  return (
    <div className='language-modal'>
      {english === true ? (
        <div className='language-option' onClick={() => setEnglish(false)}>
          <img src={sweden} alt="" />
          <p>Svenska</p>
        </div>
      ) : (
        // <div className="line"></div>
        <div className='language-option' onClick={() => setEnglish(true)}>
          <img src={england} alt="" />
          <p>English</p>
        </div>
      )
      }
    </div>
  )
}

export default LanguageModal