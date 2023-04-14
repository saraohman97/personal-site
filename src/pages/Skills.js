import css from '../assets/skills/css.webp'
import html from '../assets/skills/html.webp'
import js from '../assets/skills/javascript.png'
import mantine from '../assets/skills/mantine.png'
import react from '../assets/skills/react.png'
import vue from '../assets/skills/vue.png'

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
      </div>
    </div>
  )
}

export default Skills