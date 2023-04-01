import React from 'react'
import SocialIcons from '../components/SocialIcons'
import self from '../assets/self.png'

const Contact = () => {
  return (
    <div className='contact'>
      <SocialIcons />

      <div className="contact-text">
        <h1>Kontakta mig</h1>
        <p>Intresserad av att anställa mig? Vil du bolla idéer? Hör av dig! Jag älskar att skaffa nya kontakter. </p>

        <h3>Mobil: </h3>
        <p>070 987 65 43</p>

        <h3>Email: </h3>
        <p>hejsan@mail.com</p>
      </div>

      <div className="contact-img">
        <div className='mask'>
          <img src={self} alt="" width={400} />
        </div>
      </div>
    </div>
  )
}

export default Contact