// import css from '../assets/skills/css.webp'
// import html from '../assets/skills/html.webp'
// import js from '../assets/skills/javascript.png'
// import mantine from '../assets/skills/mantine.png'
// import react from '../assets/skills/react.png'
// import vue from '../assets/skills/vue.png'

const Skills = ({ english }) => {
  return (
    <div id='kunskaper'>
      <h1>{english === true ? 'Skills' : 'Kunskaper'}</h1>
      <p>{english === true ? 'My technical skills' : 'Mina tekniska kunskaper'}</p>

      <div className="bg">
        {/* <img src={css} alt="" width={50} className='css' />
        <img src={html} alt="" width={50} className='html' />
        <img src={js} alt="" width={50} className='js' />
        <img src={mantine} alt="" width={50} className='mantine' />
        <img src={react} alt="" width={50} className='react' />
        <img src={vue} alt="" width={50} className='vue' /> */}
      </div>
    </div>
  )
}

export default Skills