import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

function App() {
  const [english, setEnglish] = useState(false)

  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }
  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
  }
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode()
  }

  return (
    <div className='container'>
      <Navbar english={english} setEnglish={setEnglish} toggleTheme={toggleTheme} />

      <Home english={english} />
      <About english={english} />
      <Skills english={english} />
      <Portfolio english={english} />

      <Footer english={english} />
      <ScrollButton />
    </div>
  );
}

export default App;

