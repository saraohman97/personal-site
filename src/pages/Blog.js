import React from 'react'
import Post from '../components/Post'

const Blog = () => {
  return (
    <div className='blog'>
      <div className="blog-text">
        <h1>Hej. Jag är Sara. <br />En Frontend utvecklare.</h1>

        <div className='portfolio-mini-text'>
          <p>Det här är min blogg</p>
        </div>
      </div>

      <div className="blog-list">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Blog