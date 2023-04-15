import css from '../assets/skills/css.webp'
import html from '../assets/skills/html.webp'
import js from '../assets/skills/javascript.png'
import mantine from '../assets/skills/mantine.png'
import react from '../assets/skills/react.png'
import vue from '../assets/skills/vue.png'
import postman from '../assets/skills/postman.png'
import swagger from '../assets/skills/swagger.png'
import mongoDB from '../assets/skills/mongoDB.webp'
import net from '../assets/skills/net.png'
import cosmosDB from '../assets/skills/cosmosDB.png'
import bootstrap from '../assets/skills/bootstrap.png'
import redux from '../assets/skills/redux.webp'

const Skills = ({ english }) => {
  return (
    <div id='kunskaper' className='section'>
      <h1>{english === true ? 'Skills' : 'Kunskaper'}</h1>
      <p className='section-subtitle'>{english === true ? 'My technical skills' : 'Mina tekniska kunskaper'}</p>

      <div className="skills-wrapper">
        <img src={css} alt="" />
        <img src={html} alt="" />
        <img src={react} alt="" />
        <img src={vue} alt="" />
        <img src={mantine} alt="" />
        <img src={js} alt="" />
        <img src={postman} alt="" />
        <img src={swagger} alt="" />
        <img src={mongoDB} alt="" />
        <img src={net} alt="" />
        <img src={cosmosDB} alt="" />
        <img src={bootstrap} alt="" />
        <img src={redux} alt="" />
      </div>
    </div>
  )
}

export default Skills