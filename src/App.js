import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar'
import About from './pages/About';
import Footer from './components/Footer';
import Skills from './pages/Skills'
import ScrollButton from './components/ScrollButton';

function App() {
  const [english, setEnglish] = useState(false)

  return (
    <div className='container'>
      <Navbar english={english} setEnglish={setEnglish} />

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

