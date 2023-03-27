import React from 'react'
import carelyo from '../assets/carelyo.png'

const Post = () => {
  return (
    <div className='post'>
        <div className="post-text">
            <h3>Rubrik</h3>
            <small>Date</small>
            <br /><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nam sunt. Eveniet harum veniam at accusamus nam soluta velit consequatur nihil excepturi repellat, perspiciatis cupiditate dolorum quam ut suscipit numquam.</p>
        </div>
        <div className="post-img">
            <small>Bild: text</small>
            <img src={carelyo} alt="" />
        </div>
    </div>
  )
}

export default Post