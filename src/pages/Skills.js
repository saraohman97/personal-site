import birdImg from '../assets/birds-icons.png'

const Skills = ({ english }) => {
  return (
    <div id='kunskaper' className='section'>
      <h1>{english === true ? 'Skills' : 'Kunskaper'}</h1>
      <p className='section-subtitle'>{english === true ? 'My technical skills' : 'Mina tekniska kunskaper'}</p>

      {/* <div className="bg">
      </div> */}
      <img src={birdImg} alt="" />
    </div>
  )
}

export default Skills